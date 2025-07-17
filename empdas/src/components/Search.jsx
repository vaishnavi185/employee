import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div className="relative w-[560px] ml-[50px] mt-[20px]">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-[50px] pl-12 pr-4 rounded-[20px] bg-[#f0f5f7] shadow transition-shadow focus:shadow-md focus:outline-none border-none"
      />
    </div>
  );
}
