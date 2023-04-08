import { useState } from "react";
import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import '../../Css_files/LoginPage.css'
import PhoneInput from 'react-phone-number-input'
import NavHead from "../../components/Nav";
import SmsIcon from '@mui/icons-material/Sms';
import axios from "axios";

function Login() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState('');
  const navigate=useNavigate();

  const gotoUserPage=(e)=>{
    let patientNumber=phoneNumber.slice(-10);
    console.log(typeof(patientNumber));
    axios.post('http://localhost:8081/authenticate',{
        username: patientNumber,
        password: patientNumber
      })
      .then((response)=>{

        console.log(response.data.jwtToken);
        localStorage.setItem('token',response.data.jwtToken);
        const jwtToken=localStorage.getItem('token');
        axios.defaults.headers.common['Authorization']=`Bearer ${jwtToken}`;
        
        axios.get('http://localhost:8081/doctor/role',{
          params:{ phoneNumber: patientNumber}
        })
        .then((response)=>{
          
          localStorage.setItem('doctor_num',patientNumber);
          axios.get(`http://localhost:8081/doctor/doctor-by-contact/${patientNumber}`)
          .then((response)=>{
            console.log(response.data);
            localStorage.setItem('doctor', JSON.stringify(response.data));
            navigate('/DoctorPage')
          })
          .catch((error)=>{
          console.error('error on fatching doctor object',error);
          })
        })

        .catch(()=>{

          axios.get('http://localhost:8081/patient/role',{
            params:{ phoneNumber: patientNumber}
          })
          .then(()=>{
            localStorage.setItem('patient_num',patientNumber);
            navigate('/PatientPage',{
              state:{patientNum:patientNumber}
              })
          })
          .catch(()=>{
            alert("Sign up First");
          })

        })
      })
      .catch((error)=>{
          console.error('Error while fetch jwt')
      });
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
     let otp = OTP;
    // setOTP(otp);
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
  const temp_otp = useState([]);
  function clickEvent(curr,next){

    if(document.getElementById(curr).value.length===1)
    {
    temp_otp[0][document.getElementById(curr).id] = document.getElementById(curr).value;

      let temp = '';
      for(let i=0;i<temp_otp[0].length;i++)   
      {temp = temp+temp_otp[0][i];} 
            
    document.getElementById(next).focus();
    setOTP(temp);
    console.log(OTP);
    }
  }
 console.log(OTP);
  return (
    <>
    <NavHead/>
     <div className="login_css">
         <div className="box" >
          <h2 className="text_css">Enter Your number</h2>
          <div className="input_css">
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
              {/* <div className="mp-3">
               
                <h6 className="text_css">OTP</h6>
                <input
                  type="number"
                  className="input_css"
                  id="otpInput"
                  value={OTP}
                  onChange={verifyOTP}
                />
                <div>
                  Please enter the one time pin
                </div>
                <button type="submit" className="btn btn-primary" onClick={verifyOTP}>submit</button>
                
              </div> */}
              <div class="container">
              <h2 className="h2l">ENTER OTP</h2>
              <div class="userInput">
            <input className="inp_css" type="text" id='0' maxLength="1" onKeyUp={()=>clickEvent('0','1')}/>
            <input className="inp_css" type="text" id="1" maxLength="1" onChange={()=>clickEvent('1','2')}/>
            <input className="inp_css" type="text" id="2" maxLength="1" onChange={()=>clickEvent('2','3')}/>
            <input className="inp_css" type="text" id="3" maxLength="1" onChange={()=>clickEvent('3','4')}/>
            <input className="inp_css" type="text" id="4" maxLength="1" onChange={()=>clickEvent('4','5')}/>
            <input className="inp_css" type="text" id="5" maxLength="1" onChange={()=>clickEvent('5','sub')}/>
        </div>
        <button  id="sub" className="butt" onClick={verifyOTP}>SUBMIT</button>
    </div>
            </>
          ) : null}
          {expandForm === false ? (
            <button type="submit" className="butt" onClick={gotoUserPage} >
              Request OTP
            </button>
          ) : null}
          <div id="recaptcha-container"></div>
        </div>
        </div>
    </>
  );
}

export default Login;
