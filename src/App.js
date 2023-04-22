import './App.css';
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom'
import NavHead from "./components/Nav";
import Dashboard from './pages/Common/Dashboard';
import Login from './pages/Patient/login'
import DoctorPrescription from './pages/Doctor/DoctorPrescription';
import DownloadPressciption from './pages/Patient/DownloadPressciption';
import PatientDashboard from './pages/Patient/PatientDashboard'
import PatientPage from './pages/Patient/PatientPage';
import VideoCall from './pages/Common/VidoeCall'
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


function App() {
  return (
    <div>
        {/* <NavHead/> */}
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/add-prescription" element={<DoctorPrescription/>}/>
          <Route path="/showPrescription" element={<DownloadPressciption/>}/>
          <Route path="/PatientPage" element={<PatientPage/>}/>
          <Route path='/DoctorPage' element={<DoctorPage/>}/>
          <Route path="/PatientDashboard" element={<PatientDashboard/>}/>
          <Route path="/VideoCall" element={<VideoCall/>}/>
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
        </Routes>
    </div>
  );
}

export default App;
