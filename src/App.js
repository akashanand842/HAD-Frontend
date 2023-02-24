import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavHead from "./components/Nav";
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import DoctorPrescription from './pages/DoctorPrescription';
import DownloadPressciption from './pages/DownloadPressciption';
import PatientDashboard from './pages/PatientDashboard'
import PatientPage from './pages/PatientPage';

function App() {
  return (
    <div>
      <Router>
        <NavHead/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/patient_login" element={<Login></Login>}></Route>
          <Route path="/patientLogin"/>
          <Route path="/add-prescription" element={<DoctorPrescription/>}/>
          <Route path="/showPrescription" element={<DownloadPressciption/>}/>
          <Route path="/PatientPage" element={<PatientPage/>}/>
          <Route path="/PatientDashboard:patientId" element={<PatientDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
