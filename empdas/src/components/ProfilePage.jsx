import React from 'react';

export default function ProfilePage() {
  const profileData = {
    fullName: 'Vaishnavi Sharma',
    email: 'vaishnavi@example.com',
    phone: '+91-9876543210',
    username: 'vaishnavii_07',
    bio: 'Flutter developer | UI enthusiast | Tech explorer',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Rectangle box with profile */}
      <div className="w-[1000px] h-auto border border-[#b3afaf] rounded-[20px] flex flex-row p-6 relative">
        
        {/* Edit icon on top-right of rectangle */}
        <button className="absolute top-3 right-3 text-[#b3afaf] text-[20px] hover:text-white">
          ✏️
        </button>

        {/* Profile Image Section */}
        <div className="relative">
          <div className="rounded-full w-[180px] h-[180px] border border-[#b3afaf] mt-[20px] ml-[20px]" />

          {/* Edit icon on top-right of circle */}
          <button className="absolute top-[150px] left-[170px] text-[#b3afaf] text-[18px] hover:text-grey rounded-full w-[40px] h-[40px] border-[1px] bg-[#FFFFFF]">
            ✏️
          </button>
        </div>

        {/* Profile Info Display Section */}
        <div className="flex flex-col ml-[40px] mt-[10px] flex-1">
          <div className="text-[24px] font-semibold text-[#b3afaf] mb-[20px]">
            Profile Settings
          </div>

          {/* Display Profile Data */}
          <div className="text-[#b3afaf] text-[18px] flex flex-col gap-2">
            <div><strong>Full Name:</strong> {profileData.fullName}</div>
            <div><strong>Email:</strong> {profileData.email}</div>
            <div><strong>Phone:</strong> {profileData.phone}</div>
            <div><strong>Username:</strong> {profileData.username}</div>
            <div><strong>Bio:</strong> {profileData.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
