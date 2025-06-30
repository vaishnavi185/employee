import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export default function Login() {


const [formData,setFormData]=useState({
    email:"",
    passward:""
})

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit =async(e)=>{
    // if (!formData.name || !formData.passward) {
    //  alert("all fields are required")
    //   return;
    // }
    try{
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/user/login',formData,{
        headers: {
    'Content-Type': 'application/json'
  }
    });
    console.log(response.data);

   if (response.data.success) {

        alert("user is login");

    }
    else{
        alert("user not login")
    }

    }
    catch (e) {
  if (e.response) {
    // Server responded with a status other than 2xx
    console.error("Server responded with error:", e.response.data);
  } else if (e.request) {
    // Request was made but no response received
    console.error("No response received from server:", e.request);
  } else {
    // Something else went wrong
    console.error("Axios error:", e.message);
  }
}

}


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
           name='passward'
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
  )
}
