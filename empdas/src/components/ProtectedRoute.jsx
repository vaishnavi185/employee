import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/user/me", {
          withCredentials: true // 🔑 ensures HttpOnly cookie is sent
        });
        setAuth(true);
      } catch (err) {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <p>Loading...</p>; // Wait for backend check

  return auth ? children : <Navigate to="/login" replace />;
}
