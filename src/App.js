import './App.css';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Common/Dashboard';
import Login from './pages/Patient/login'
import PatientDashboard from './pages/Patient/PatientDashboard'
import PatientPage from './pages/Patient/PatientPage';
import RoomPage from './pages/Common/room';
import RoomPageDoctor from './pages/Doctor/roomDoctor'
import DoctorPage from './pages/Doctor/DoctorPage';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import DoctorHistory from './pages/Doctor/DoctorHistory';
import SignUp from './pages/Common/SignUp';
import AddNewPatient from './pages/Patient/AddNewPatient';
import RegistrationForm from './pages/Patient/RegistrationForm';
import PatientPrescriptionList from './pages/Patient/PatientPrescriptionList';
import PatientProfile from './pages/Patient/PatientProfile';
import { PatientHistory } from './pages/Patient/PatientHistory';
import { DoctorPrescriptionList } from './pages/Doctor/DoctorPrescriptionList';
import AboutUs from './pages/Common/AboutUs';
import Help from './pages/Common/Help';


function App() {
  return (
    <div>
        {/* <NavHead/> */}
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/PatientPage" element={<PatientPage/>}/>
          <Route path='/DoctorPage' element={<DoctorPage/>}/>
          <Route path="/PatientDashboard" element={<PatientDashboard/>}/>
          <Route path="/roomPatient" element={<RoomPage/>}></Route>
          <Route path="/DoctorProfile" element={<DoctorProfile/>}/>
          <Route path='/doctor-history' element={<DoctorHistory/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path="/roomDoctor" element={<RoomPageDoctor/>}></Route>
          <Route path="/addNew" element={<AddNewPatient/>}/>
          <Route path="/registrationForm" element={<RegistrationForm/>}/>
          <Route path='/patientPrescriptionList' element={<PatientPrescriptionList/>}></Route>
          <Route path='/PatientProfile' element={<PatientProfile/>}/>
          <Route path='/patientHistory' element={<PatientHistory/>}></Route>
          <Route path='/doctorPrescriptionList' element={<DoctorPrescriptionList/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
        </Routes>
    </div>
  );
}

export default App;
