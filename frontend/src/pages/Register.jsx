import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("aprendiz");

  const handleRegister = async () => {
    const response = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        role
      })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Usuario creado");
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <h2>Registro</h2>

      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="aprendiz">Aprendiz</option>
        <option value="instructor">Instructor</option>
      </select>

      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default Register;