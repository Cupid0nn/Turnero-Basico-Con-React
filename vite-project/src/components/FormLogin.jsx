import React from "react";
import validateUser from "../Helpers/validateUser";
import {loggedUsers} from "../redux/loginReduce";
import { useDispatch, useSelector } from "react-redux";


export default function FormLogin() {
  const dispatch = useDispatch();
  const estado = useSelector((state) => state);
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación adicional si es necesario
    const validationErrors = validateUser(input);
    if (validationErrors.username || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:3003/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      // dispatch
      dispatch(loggedUsers(result.user.id));
  
      

      alert(`Username: ${input.username} Bienvenido!!`);
      
      
      // Limpiar el formulario
      setInput({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
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
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={input.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <p style={{ color: "coral" }}>{errors.username}</p>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <p style={{ color: "coral" }}>{errors.password}</p>
        <br />
        <button
          type="submit"
          style={{
            width: "10rem",
            height: "3rem",
            borderRadius: "10px",
            justifyContent: "center",
          }}
          disabled={errors.username || errors.password}
        >
          Login
        </button>
      </form>
    </div>
  );
}
