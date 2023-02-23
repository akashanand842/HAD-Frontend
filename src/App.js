import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavHead from "./components/Nav";
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import DoctorPrescription from './pages/DoctorPrescription';


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
