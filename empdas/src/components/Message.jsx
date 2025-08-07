import React from 'react'
import ContactList from './ContactList'

export default function Message() {
  return (
    <div className=' border border-gray-300 rounded-lg p-4 shadow-sm h-screen w-full flex overflow-hidden'>
     <div className='flex flex-col overflow-hidden'>
      <text className='text-[#87898a] '>Messages</text>
      <input className='border border-gray-300 rounded-lg p-[1.8px] mt-[10px] w-[290px]' placeholder='Search messages' />
      <br></br>
     <ContactList></ContactList>
     </div>
  <div class="col-span-2">02</div>
  
  
    <div >

    </div>
    </div>
  )
}
