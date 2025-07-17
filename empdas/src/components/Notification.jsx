import React from 'react'
import { BellIcon } from '@heroicons/react/24/outline'
export default function Notification() {
  return (
    <div>
      <button className="p-2 rounded-full  transition mt-[29px] ml-[10px]">
        <BellIcon className="w-[30px] h-[30px] text-[#383838]" />
      </button>
    </div>
  )
}
