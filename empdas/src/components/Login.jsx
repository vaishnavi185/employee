import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    passward: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/user/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      console.log(response.data);

      if (response.data.success) {
        // ✅ Set the token in cookies
        // Cookies.set('token', response.data.token, { expires: 1 });

        alert("user is login");
        navigate('/Dasboard'); // ✅ match your exact route path
      } else {
        alert("user not login");
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
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>

        <input 
          type="email"
          name='email'
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input 
          type="password"
          name='passward' // ✅ no change here
          placeholder="Password"
          value={formData.passward}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
