import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  const navigate = useNavigate();

  const handleRegisterBack = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_BACK_URL}auth/register`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(`${import.meta.env.VITE_BACK_URL}auth/register`);
    const responsejson = await response.json();
    console.log(responsejson.data);
    if(response.ok){
      toast.success("Usuario creado");
      //navigate a login
      navigate("/login");
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      usuario === "" ||
      email === "" ||
      fecha === "" ||
      contraseña === "" ||
      contraseña2 === ""
    ) {
      toast.error("complete los campos para continuar");
    } else {
      if (contraseña === contraseña2) {
        const data = {
          username: usuario,
          email,
          fechaNacimiento:fecha,
          password:contraseña,
        };
        await handleRegisterBack(data);
        console.log(data);
        toast.success("Usuario creado");
      } else {
        toast.error("Las contraseñas no coinciden");
      }
    }
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit} className="form">
        <h1>Registrarse</h1>
        <div className="input">
          <label htmlFor="usuario" className="label">
            Usuario
          </label>
          <input
            type="text"
            id="usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="fecha" className="label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            id="fecha"
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="pass" className="label">
            Contraseña
          </label>
          <input
            type="password"
            id="pass"
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="pass2" className="label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            id="pass2"
            onChange={(e) => setContraseña2(e.target.value)}
          />
        </div>

        <button type="submit" className="boton">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
