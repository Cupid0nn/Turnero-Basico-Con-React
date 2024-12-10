import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointment from "../components/Appointment";
import AppointmentEmpty from "../components/AppointmentEmpty";
import { useSelector, useDispatch } from "react-redux";
import { setAppointments } from "../redux/Appointmentreduce";

const MyAppointments = () => {
  // const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const estado = useSelector((state) => state.session);
  const { appointments } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3003/appointment?userID=" + estado.userid
        );
        // setAppointments(response.data);
        // dispatch setAppointments(response.data)
        const data = {
          data: response.data,
          userid: estado.userid,
        };
        dispatch(setAppointments(data));
      } catch (err) {
        setError(err.message || "Error get appointment");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    // mira el estado del usuario  si esta loggeado
   
    // dependiendo de ese booleano si redireccionamos o no.
    if (estado.login === false) {
      window.location.href = "/login";
    }
  });
  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div
      style={{
        padding: "4em",
        display: "flex",
        alignItems: "left",
      }}
    >
      <h1>Mis Citas:</h1>
      <div
        style={{
          padding: "4em",
          display: "flex",
          alignItems: "left",
          gap: "7em",
          flexWrap: "wrap",
        }}
      >
        {!appointments.length ? (
          <AppointmentEmpty />
        ) : (
          appointments.map((appointment) => (
            <Appointment key={appointment.id} {...appointment} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
