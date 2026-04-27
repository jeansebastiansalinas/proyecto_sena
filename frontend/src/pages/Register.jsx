import { useState } from "react";

function Register({ onClose, onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("aprendiz");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("¡Cuenta creada! Ahora inicia sesión.");
        onSwitch();
      } else {
        alert(data.error || "Error al registrar");
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
        <h2 className="text-2xl font-black text-[#3C3C3C]">Crear cuenta</h2>
        <p className="text-sm text-gray-400 mt-1 font-semibold">¡Empieza hoy, es gratis!</p>
      </div>

      <div className="flex flex-col gap-3">
        <input className={inputStyle} type="text" placeholder="Nombre de usuario" onChange={e => setUsername(e.target.value)} />
        <input className={inputStyle} type="email" placeholder="Correo electrónico" />
        <input className={inputStyle} type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        <select
          className={inputStyle}
          style={{appearance:"none", backgroundColor:"#fff"}}
          onChange={e => setRole(e.target.value)}
        >
          <option value="aprendiz">Aprendiz</option>
          <option value="instructor">Instructor</option>
        </select>
        <button
          onClick={handleRegister}
          disabled={loading}
          className="bg-[#58CC02] text-white font-black text-base py-4 rounded-2xl uppercase tracking-wider hover:bg-[#46A302] disabled:opacity-60 transition-all mt-1"
          style={{boxShadow:"0 4px 0 #46A302"}}
        >
          {loading ? "Creando..." : "Crear cuenta gratis"}
        </button>
      </div>

      <p className="text-center mt-5 text-sm text-gray-400 font-semibold">
        ¿Ya tienes cuenta?{" "}
        <button onClick={onSwitch} className="text-[#1CB0F6] font-black hover:underline">Inicia sesión</button>
      </p>
    </div>
  );
}

export default Register;