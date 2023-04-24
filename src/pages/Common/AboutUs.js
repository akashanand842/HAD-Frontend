import React from 'react'
import "./../../Css_files/AboutUs.css";
import NavHead from '../../components/Nav';

const AboutUs = () => {
  return (
    <>
    <NavHead/>
    <div className='aboutus-background'>
    <div className='boxx'>
       <h1 style={{ textAlign:"center"}}>About Us</h1>
<p>
Welcome to our Tele-Consulting app, where we provide a platform for patients to connect with doctors through video calls. Our goal is to provide convenient and affordable healthcare services to anyone, anywhere in the world.
</p>
<p>
Our app is designed to make it easy for patients to book appointments with doctors without the need to leave their homes. All you need to do is register your phone number, and you can start booking appointments with our certified doctors. During the booking process, you will be asked to mention your symptoms, so the doctor can have an idea of what your medical condition is before the appointment.
</p>
<p>
Our doctors are highly qualified and have years of experience in their respective fields. They are committed to providing the best possible care to our patients and are available for consultations at your convenience.
</p>
<p>
We understand that not everyone has the time or resources to visit a doctor in person, which is why we created our tele-consulting app. With our app, you can get medical advice from the comfort of your home or office, without the need to travel or take time off work.
</p><p>
Thank you for choosing our Tele-Consulting app for your healthcare needs. We look forward to serving you and helping you stay healthy.
</p>

       </div>
    </div>
    </>
  )
}

export default AboutUs
