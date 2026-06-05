import {BrowserRouter , Routes, Route} from 'react-router-dom'
import AppointmentDetails from './components/AppointmentDetails'
import DoctorPatientDetails from './components/DoctorPatientDetails'
import DoctorList from './components/DoctorList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/doctors/:doctorId/patients/:patientId" element={<DoctorPatientDetails />} />
        <Route
          path="/doctors/:doctorId/patients/:patientId/appointments/:appointmentId"
          element={<AppointmentDetails />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// npm install react-router-dom
// and npm install