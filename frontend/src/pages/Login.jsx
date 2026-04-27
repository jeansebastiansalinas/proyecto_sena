import { useState } from "react";

function Login({ onClose, onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        window.location.href = "/dashboard";
      } else {
        alert("Credenciales incorrectas");
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-base font-semibold text-[#3C3C3C] outline-none focus:border-[#84d8ff] transition-all placeholder-gray-400";

  return (
    <div className="bg-white rounded-3xl p-9 w-[400px] relative" style={{borderBottom:"4px solid #e0e0e0", fontFamily:"'Nunito',sans-serif"}}>
      <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-gray-500 text-base transition-all">✕</button>

      <div className="text-center mb-6">
        <div className="text-5xl mb-2">🦉</div>
        <h2 className="text-2xl font-black text-[#3C3C3C]">Iniciar sesión</h2>
        <p className="text-sm text-gray-400 mt-1 font-semibold">Continúa tu aprendizaje</p>
      </div>

      <div className="flex flex-col gap-3">
        <input className={inputStyle} type="text" placeholder="Usuario o correo" onChange={e => setUsername(e.target.value)} />
        <input className={inputStyle} type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-[#58CC02] text-white font-black text-base py-4 rounded-2xl uppercase tracking-wider hover:bg-[#46A302] disabled:opacity-60 transition-all mt-1"
          style={{boxShadow:"0 4px 0 #46A302"}}
        >
          {loading ? "Entrando..." : "Ingresar"}
        </button>
      </div>

      <p className="text-center mt-5 text-sm text-gray-400 font-semibold">
        ¿No tienes cuenta?{" "}
        <button onClick={onSwitch} className="text-[#1CB0F6] font-black hover:underline">Regístrate</button>
      </p>
    </div>
  );
}

export default Login;