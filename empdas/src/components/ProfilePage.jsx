import { Menu } from '@headlessui/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { ChevronDownIcon ,ChevronLeftIcon,UserCircleIcon} from '@heroicons/react/20/solid';

export default function ProfilePage() {
  return (
    <Menu as="div" className="relative inline-block text-left  mt-[25px] ml-[40px]">
      <div>
       <Menu.Button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-[#c8c9cc] transition-colors  rounded-md">
          {/* Profile Icon */}
          <UserCircleIcon className="h-[40px] w-[40px] text-gray-500" />

          {/* Name and Email */}
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-gray-500">example@gmail.com</span>
          </div>

          {/* Dropdown Icon */}
          <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
           
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-[20px] z-10   w-[360px] h-[500px] origin-top-right divide-y divide-gray-100 rounded-[30px] bg-white focus:outline-none">
        <div className="flex flex-col">
          <Menu.Item>
            {({ active }) => (
           <div className='w-[360px] h-[200px] bg-[#202121] rounded-t-[30px]  flex flex-col'>
            <div className='flex flex-row gap-[280px]'>
  <ChevronLeftIcon className='h-[30px] w-[30px] text-[#a6abad] mt-[10px] ml-[10px] '></ChevronLeftIcon >
<PencilSquareIcon className=" h-5 w-5 text-gray-400 mt-[10px]" aria-hidden="true" />
            </div>
              

                <div className='w-[120px] h-[120px] rounded-full bg-[#FFFFFF] mt-[150px] ml-[122px] absolute' >
                   <UserCircleIcon className="w-[120px] h-[120px] text-[#999696]" />
                </div>
                <div className='text-[#000000] ml-[122px] mt-[270px] absolute text-center'>
  <p className='text-lg font-semibold'>Lucifer Bandage</p>
  <p className='text-base text-[#999696] '>devloper </p>
</div>

           </div>
            )}
          </Menu.Item>
          {/* <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100 text-gray-900' : ''}`}
              >
                Duplicate
              </a>
            )}
          </Menu.Item> */}
        </div>
        {/* Add the other groups similarly */}
      </Menu.Items>
    </Menu>
  );
}
