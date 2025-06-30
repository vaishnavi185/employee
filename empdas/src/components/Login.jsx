import React from 'react'

export default function Login() {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>

       
<input 
          type="email"
          name='email'
          placeholder="Email"
          
        //    value={formData.email}
        //    onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        

        

        <input 
          type="password"
           name='passward'
          placeholder="Password"
        //    value={formData.passward}
          
        //    onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          type="submit"
        //   onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  )
}
