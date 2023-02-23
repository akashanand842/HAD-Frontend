import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Login() {
    const [value, setValue] = useState('');
    const [otp, setOtp] = useState('');

    return (


        <div className='square border border-2'>
            <div className="col-md-2 offset-md-7  " >

                <div className="mb-3">
                    <PhoneInput
                        defaultCountry="IN"
                        international withCountryCallingCode
                        value={value}
                        onChange={setValue} />

                    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </div></div>



    )
}
export default Login;