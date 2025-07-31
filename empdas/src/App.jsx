import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Login from "./components/Login";
import Formm from "./components/Formm";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Cookies from "js-cookie";
import Message from "./components/Message";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authToken");
    setIsLoggedIn(!token);
    setLoading(false); // auth check done
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/Dasboard" /> : <SignupPage />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/Dasboard" /> : <Login />} />
        <Route path="/message" element={<Message />} />
        <Route path="/form" element={<Formm />} />
        <Route
          path="/Dasboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
