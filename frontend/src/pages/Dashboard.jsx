import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // 👈 estado

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/");
      return;
    }

    fetch("http://localhost:8000/api/perfil/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          navigate("/");
          throw new Error("No autorizado");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Perfil:", data);
        setUserData(data); // 👈 guardas la data
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, estás autenticado</p>

      {/* 👇 validación para evitar error mientras carga */}
      {userData && <p>Rol: {userData.role}</p>}
    </div>
  );
}

export default Dashboard;