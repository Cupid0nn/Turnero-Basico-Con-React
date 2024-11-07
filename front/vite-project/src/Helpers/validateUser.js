// ../Helpers/validateUser.js
const validateUser = (input) => {
  const errors = {};
  const today = new Date();
  const minAge = 18;

  // Validación para el nombre de usuario
  if (!input.username?.trim()) {
    errors.username = "Username es obligatorio.";
  } else if (input.username.length < 3) {
    errors.username = "Username tiene que tener minimo 3 caracteres.";
  }

  // Validación para la contraseña
  if (!input.password) {
    errors.password = "Password es obligatorio.";
  } else if (input.password.length < 6) {
    errors.password = "Password debe tener minimo 6 caracteres.";
  } else if (!/[A-Z]/.test(input.password)) {
    errors.password = "Password debe tener minimo una Mayuscula.";
  } else if (input.password === input.username) {
    errors.password = "Password no puede ser lo mismo que el nombre de usuario.";
  }

  // Validación para el nombre
  if (!input.name?.trim()) {
    errors.name = "Nombre es obligatorio.";
  }

  // Validación para el email
  if (!input.email) {
    errors.email = "Email es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email no es valido.";
  }

  // Validación para la fecha de nacimiento
  if (!input.birthdate) {
    errors.birthdate = "Fecha de nacimiento es obligatoria.";
  } else {
    const birthdate = new Date(input.birthdate);
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    if (age < minAge) {
      errors.birthdate = `Debes tener al menos ${minAge}.`;
    }
  }

  // Validación para el DNI
  if (!input.nDni) {
    errors.nDni = "DNI es obligatorio.";
  } else if (!/^\d+$/.test(input.nDni)) {
    errors.nDni = "DNI solo puede contener números.";
  }

  return errors;
};

export default validateUser;
