import React, { useState } from "react";
import axios from "axios";
import validateUser from "../Helpers/validateUser"; // Importa la función de validación

export default function FormRegister() {
  const [input, setInput] = useState({
    username: "",
    name: "",
    password: "",
    email: "",
    birthdate: "",
    nDni: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(
      validateUser({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateUser(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3003/users/register', input);
        
        alert(`Username: ${input.username} Bienvenido!!`);

        setInput({
          username: "",
          name: "",
          password: "",
          email: "",
          birthdate: "",
          nDni: "",
        });
      } catch (error) {
        alert(`Hubo un error: ${error.response ? error.response.data.message : error.message}`);
      }
    } else {
      alert("Por favor, corrija los errores antes de enviar.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          paddingTop: "5rem",
        }}
      >
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          name="username"
          value={input.username}
          placeholder="Username"
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: "coral" }}>{errors.username}</p>}
        
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Password"
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "coral" }}>{errors.password}</p>}
        
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="Name"
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "coral" }}>{errors.name}</p>}
        
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "coral" }}>{errors.email}</p>}
        
        <label htmlFor="birthdate" className="form-label">Birthdate</label>
        <input
          type="date"
          name="birthdate"
          value={input.birthdate}
          placeholder="Birthdate"
          onChange={handleChange}
        />
        {errors.birthdate && <p style={{ color: "coral" }}>{errors.birthdate}</p>}
        
        <label htmlFor="nDni" className="form-label">DNI</label>
        <input
          type="number"
          name="nDni"
          value={input.nDni}
          placeholder="DNI"
          onChange={handleChange}
        />
        {errors.nDni && <p style={{ color: "coral" }}>{errors.nDni}</p>}
        
        <button
          type="submit"
          style={{
            margin: "1rem 0",
            padding: "0.5rem 1rem",
            width: "10rem",
            height: "3rem",
            borderRadius: "10px",
            justifyContent: "center",
          }}
        >
          register
        </button>
      </form>
    </div>
  );
}
