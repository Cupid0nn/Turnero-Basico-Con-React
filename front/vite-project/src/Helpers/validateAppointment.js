// validations.js

export const validateAppointment = (date, time,) => {
    const errors = {};
  
    const today = new Date();
    const selectedDate = new Date(date);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 5);
  
    if (!date) {
      errors.date = "La fecha es obligatoria";
    } else {
      const dayOfWeek = selectedDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        errors.date = "La fecha debe ser un día hábil (lunes a viernes)";
      }
  
      if (selectedDate.toDateString() === today.toDateString()) {
        errors.date = "La cita no puede ser agendada el mismo día";
      }
  
      if (selectedDate.getFullYear() !== today.getFullYear()) {
        errors.date = "La cita debe ser agendada dentro de este año";
      }
  
      if (selectedDate > maxDate) {
        errors.date = "La cita debe ser agendada como máximo dentro de 5 días";
      }
    }
  
    if (!time) {
      errors.time = "La hora es obligatoria";
    } else {
      const [hours, minutes] = time.split(":").map(Number);
      if (hours < 9 || hours > 17 || (hours === 17 && minutes > 0)) {
        errors.time = "La hora debe estar entre las 9:00 AM y las 5:00 PM";
      }
    }
  
    
  
    return errors;
  };
  