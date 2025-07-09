import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function Formm() {
  const [formdata, setFormData] = useState({
    Fullname: "",
    email: "",
    phone: "",
    Username: "",
    Bio: ""
  });

  const [profilePicture, setProfilePicture] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append all text fields
    for (let key in formdata) {
      formDataToSend.append(key, formdata[key]);
    }

    // Append file if selected
    if (profilePicture) {
      formDataToSend.append('profilePicture', profilePicture);
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/user/Form',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      );

      if (response.status === 200) {
        alert('Profile updated successfully');
      } else {
        alert('Failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      {/* Profile Picture Upload */}
      <div className="flex items-center space-x-4 mb-6">
        {profilePicture ? (
          <img
            src={URL.createObjectURL(profilePicture)}
            alt="Preview"
            className="w-20 h-20 object-cover rounded-full"
          />
        ) : (
          <UserCircleIcon className="w-20 h-20 text-gray-400" />
        )}

        <div className="space-x-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-purple-50 file:text-purple-700
              hover:file:bg-purple-100"
          />
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            name="Fullname"
            placeholder="Fullname"
            onChange={handleChange}
            value={formdata.Fullname}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formdata.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            value={formdata.Username}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formdata.phone}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea
          rows="4"
          name="Bio"
          placeholder="Add bio"
          value={formdata.Bio}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
        >
          Done
        </button>
      </div>
    </div>
  );
}
