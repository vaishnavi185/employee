import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function Formm() {
  const [formdata, setFormData] = useState({
    Fullname: "",
    email: "",
    phone: "",
    Username: "",
    Bio: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  // Submit form
 // Submit form
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted");

  const formDataToSend = new FormData();
  for (let key in formdata) {
    formDataToSend.append(key, formdata[key]);
  }
  if (profilePicture) {
    formDataToSend.append("profilePicture", profilePicture);
  }

  try {
    setLoading(true);
    const response = await axios.put( // <-- changed to PUT
      "http://localhost:3000/user/update", // <-- new route
      formDataToSend,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true, // if you're using cookies/JWT
      }
    );

    console.log("Server response:", response.data);

    if (response.status === 200) {
      alert("✅ Profile updated successfully!");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(`❌ Error: ${error.response?.data?.message || error.message}`);
  } finally {
    setLoading(false);
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

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name
            </label>
            <input
              type="text"
              name="Fullname"
              placeholder="Fullname"
              onChange={handleChange}
              value={formdata.Fullname}
              required
              className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              value={formdata.Username}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formdata.phone}
              onChange={handleChange}
              required
              className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            rows="4"
            name="Bio"
            placeholder="Add bio"
            value={formdata.Bio}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm px-3 py-2"
          />
        </div>
       

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-md text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
