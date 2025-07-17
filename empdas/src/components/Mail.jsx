import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
export default function Mail() {
  return (
     <div>
      <button className="p-2 rounded-full  transition mt-[29px] ml-[500px]">
        <EnvelopeIcon className="w-[30px] h-[30px] text-[#383838]" />
      </button>
    </div>
  )
}
