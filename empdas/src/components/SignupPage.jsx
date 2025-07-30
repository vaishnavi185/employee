import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'   // <-- import added
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();

  // if already logged in, redirect to dashboard
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      navigate("/Dasboard");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passward: ""   // kept same spelling
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        'http://localhost:3000/user/registration',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // allow backend to set cookies
        }
      );

      console.log(response.data);

      if (response.data.success) {
        alert("user is register");

        // if backend sends a token, store it in cookies
        if (response.data.token) {
          Cookies.set("authToken", response.data.token, { expires: 1 }); // 1 day
        }

        navigate("/Dasboard");
      } else {
        alert("user not registered");
      }
    } catch (e) {
      if (e.response) {
        console.error("Server responded with error:", e.response.data);
      } else if (e.request) {
        console.error("No response received from server:", e.request);
      } else {
        console.error("Axios error:", e.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name='name'
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name='email'
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name='phone'
          placeholder="phone-number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          name='passward'
          placeholder="Password"
          value={formData.passward}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
