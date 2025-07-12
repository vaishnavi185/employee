import React from 'react';
import { PencilIcon } from '@heroicons/react/24/solid'; // or /24/outline for outline style
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function ProfilePage() {
     const [profileData, setProfileData] = useState({});
const getFormData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/getform',{
         withCredentials: true,
      }); // ✅ Correct URL
      setProfileData(response.data); // ✅ Save to state
    } catch (e) {
      console.error('Failed to fetch profile:', e);
    }
  };

  useEffect(() => {
    getFormData(); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
">
 
      <div className="w-[1000px] h-auto border border-[#b3afaf] rounded-[20px] flex flex-row p-6 relative hover:bg[#000000]">
        
    
        <button className="absolute top-3 right-3 text-[#b3afaf] text-[20px] hover:text-black">
          <PencilIcon className="h-5 w-5" />
        </button>

        {/* Profile Image Section */}
       <div className="relative">
  <img
    src={profileData.profilePicture || '/default-avatar.png'}
    alt="Profile"
    className="rounded-full w-[180px] h-[180px] border border-[#b3afaf] mt-[20px] ml-[20px] object-cover"
  />

  <button className="absolute top-[150px] left-[170px] text-[#b3afaf] text-[18px] hover:bg-[#dedede] rounded-full w-[40px] h-[40px] border-[1px] bg-[#FFFFFF] flex items-center justify-center">
    <PencilIcon className="h-5 w-5" />
  </button>
</div>

        {/* Profile Info Display Section */}
        <div className="flex flex-col ml-[40px] mt-[10px] flex-1">
          <div className="text-[24px] font-semibold text-[#b3afaf] mb-[20px]">
            Profile Settings
          </div>

          {/* Display Profile Data */}
          <div className="text-[#b3afaf] text-[18px] flex flex-col gap-2">
            <div><strong>Full Name:</strong> {profileData.Fullname}</div>
            <div><strong>Email:</strong> {profileData.email}</div>
            <div><strong>Phone:</strong> {profileData.phone}</div>
            <div><strong>Username:</strong> {profileData.Username}</div>
            <div><strong>Bio:</strong> {profileData.Bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
