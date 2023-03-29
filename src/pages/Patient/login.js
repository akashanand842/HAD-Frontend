import { useState } from "react";
import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import '../../Css_files/LoginPage.css'
import PhoneInput from 'react-phone-number-input'

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState('');
  const navigate=useNavigate();
  const gotoUserPage=(e)=>{
    let patientNumber=phoneNumber.slice(-10);
    navigate('/PatientPage',{
      state:{patientNum:patientNumber}
    })
  }
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("captcha reviceved");
        },
      },
      authentication
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("here");
        })
        .catch((error) => {
          console.log('not getting otp');
        });
    }
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      // console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          gotoUserPage();
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  };
 console.log(OTP);
  return (
    <>
     <div >
         <div className="col-md-2 offset-md-8 box" >
          <h3>Enter Your number</h3>
          <div className="mb-2">
            <PhoneInput
              defaultCountry="IN"
              international
              withCountryCallingCode
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>

          {expandForm === true ? (
            <>
              <div className="mp-3">
                <h6>OTP</h6>
                <input
                  type="number"
                  className="form-control"
                  id="otpInput"
                  value={OTP}
                  onChange={verifyOTP}
                />
                <div>
                  Please enter the one time pin
                </div>
                <button type="submit" className="btn btn-primary" onClick={verifyOTP}>submit</button>
              </div>
            </>
          ) : null}
          {expandForm === false ? (
            <button type="submit" className="btn btn-primary" onClick={requestOTP}>
              Request Otp
            </button>
          ) : null}
          <div id="recaptcha-container"></div>
        </div>
        </div>
    </>
  );
}

export default Login;
