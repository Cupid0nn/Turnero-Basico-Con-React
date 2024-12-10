import Home from "./views/Home.jsx";
import MyAppointments from "./views/MyAppointments.jsx";
import NavBar from "./components/NavBar.jsx";
import FormLogin from "./components/FormLogin.jsx";
import FormRegister from "./components/FormRegister.jsx";
import { Routes, Route } from "react-router-dom";
import Appointment from "./components/Appointment.jsx";
import AppointmentSchedule from "./components/AppointmentSchedule.jsx";


function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/appointment" element={<MyAppointments />} />
        <Route path="/register" element={<FormRegister />} /> 
        <Route path="/appointment/schedule" element={<AppointmentSchedule/>} />
      </Routes>
    </>
  );
}

export default App;
