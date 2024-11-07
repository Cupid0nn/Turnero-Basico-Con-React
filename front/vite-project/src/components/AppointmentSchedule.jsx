import React, { useState } from "react";
import { validateAppointment } from "../Helpers/validateAppointment";
import { useSelector, } from "react-redux";
import { useEffect } from "react";


const AppointmentSchedule = () => {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({});
  const estado = useSelector((state) => state.session);


  useEffect(() => {
    // mira el estado del usuario  si esta loggeado 
    
     // dependiendo de ese booleano si redireccionamos o no.
     if (estado.login===false) { 
       window.location.href = "/login";
     }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateAppointment(date, time, );
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // userId, date, time

    const appointmentData = {
      userId: estado.userid,
      date,
      time,
    };

    try {
      const response = await fetch("http://localhost:3003/appointment/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("Cita programada con exito");

      // Limpiar el formulario después del envío exitoso
     
      setDate("");
      setTime("");
     
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          margin: "10px",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#654321",
          boxShadow:
            "0 20px 25px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)",
          color: "white",
          fontFamily: "Helvetica",
          textAlign: "center",
          
          
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <span style={{ color: "coral" }}>{errors.date}</span>}
        
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {errors.time && <span style={{ color: "coral" }}>{errors.time}</span>}
        
        
        
  
        
        <button type="submit">Crear cita</button>
      </form>
    </div>
  );
};

export default AppointmentSchedule;
