import React, { useState } from 'react'
import PatientMenu from './PatientMenu'
import RegistrationForm from './RegistrationForm';
import PatientDashboard from './PatientDashboard';

const Test = () => {
   const [flg, setFlg] = useState(false);
  return (
    <div>
        {/* <PatientMenu>
            <PatientDashboard >
            <button onClick={()=>{setFlg(true)}}>Registration</button>
            {flg ? (
            <>
                <RegistrationForm></RegistrationForm>
            </> 
            )
            :null}
            </PatientDashboard>
        </PatientMenu> */}
    </div>
  )
}

export default Test
