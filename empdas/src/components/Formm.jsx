import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";


export default function Formm() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      {/* Profile Picture */}
      <div className="flex items-center space-x-4 mb-6">
         <UserCircleIcon className="w-20 h-20 text-gray-400" />
        <div className="space-x-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Upload New
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Remove Profile Picture
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            // value="Christine Brown"
            className="w-full border-gray-300 rounded-md shadow-sm "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <div className="relative">
            <input
              type="email"
              // value="christinebrown@gmail.com"
              className="w-full border-gray-300 rounded-md shadow-sm "
            />
            {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-sm font-medium">✔ Verified</span> */}
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            // value="christinebrown"
            className="w-full border-gray-300 rounded-md shadow-sm "
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
          <div className="relative">
            <input
              type="text"
              // value="+1 945-913-2196"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
            {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-sm font-medium">✔ Verified</span> */}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea
          rows="4"
          // value={`Senior blog writer at Hamill Group since 2017.\nI've also been lucky enough to work for the Parisian LLC.`}
          className="w-full border-gray-300 rounded-md shadow-sm "
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
          Update Profile
        </button>
      </div>
    </div>
  );
}
