import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8000/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  const data = await response.json();

  if (response.ok) {
    // 🔥 GUARDAR TOKEN
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    // redirigir
    window.location.href = "/dashboard";
  } else {
    alert("Credenciales incorrectas");
  }
};

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) => setUsername(e.target.value)}
      />

<h1 className="text-4xl text-green-500">FUNCIONA</h1>
<h1 className="test">PRUEBA</h1>
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Ingresar</button>
    </div>
    
  );
  <p onClick={() => window.location.href="/register"}>
  Crear cuenta
</p>


}

export default Login;