import React from 'react';

const AppointmentEmpty = () => {
  return (
    
    <div style={{
      border: '1px solid black', padding: '10px', margin: '10px'
    , borderRadius: '10px', backgroundColor: '#654321', boxShadow: '0 20px 25px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)',
    color: 'white', textJustify: 'center', fontSize: '20px',
    }}>
      <p>No se encontraron citas, Intente nuevamente.</p>
    </div>
  );
};

export default AppointmentEmpty;