import React from 'react'

export default function ProfilePage() {
  return (
  <>
  <div className="flex flex-col items-center justify-center min-h-screen">
  <div className="text-[40px] font-[20px] text-[#b3afaf] mb-6">
    Profile Settings
  </div>

  <div className="w-[800px] h-[600px] border border-[#b3afaf] rounded-[7px] flex flex-row">
    {/* Content here */}

    <div className='flex flex-col '>
<div className='rounded-full w-[200px] h-[200px]  border border-[#b3afaf] mt-[50px] ml-[50px]' > 
  <button className="rounded-[20px] h-[40px] w-[150px] mt-[230px] bg-[#b3afaf] text-white ml-[20px]">
  Change Profile
</button>

</div>
    </div>


  </div>
</div>



  </>
  )
}
