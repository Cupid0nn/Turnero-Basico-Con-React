import axios from 'axios';
import React from 'react';

const Appointment = ({ id, date, time, status }) => {

  const handleCancel  = async (event) => {
    event.preventDefault();
  try {
   await axios.put (`http://localhost:3003/appointment/${id}/cancel`, {
  })
  alert('Turno cancelado')
  } catch (error) {
    alert(error)
  }


  };
  
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'
    , borderRadius: '10px', backgroundColor: '#654321', boxShadow: '0 20px 25px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)',
    color: 'white', textJustify: 'center',

    }}>
      <h3>Turno {id}</h3>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Estatus: {status}</p>
      <button style={{backgroundColor: 'red', color: 'white', borderRadius: '10px' , padding: '10px', margin: '10px', border: '1px solid black', hover: 'red'}} onClick={handleCancel}> Cancelar</button>
    </div>
  );
};

export default Appointment;