import {
  HomeIcon,
  UserCircleIcon,
  UsersIcon,

  ChartBarIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";


const menuItems = [
  { name: "Dashboard", icon: <HomeIcon className="h-5 w-5 text-[#FFFFFF]"  /> },
  
 
  { name: "Employee", icon: <UsersIcon className="h-5 w-5 text-[#FFFFFF]" /> },
 
  { name: "Analytics", icon: <ChartBarIcon className="h-5 w-5 text-[#FFFFFF]" /> },
  { name: "Setting", icon: <Cog6ToothIcon className="h-5 w-5 text-[#FFFFFF]" /> },
   { name: "Profile", icon: <UserCircleIcon className="h-5 w-5 text-[#FFFFFF]" /> } ,
  { name: "Help", icon: <QuestionMarkCircleIcon className="h-5 w-5 text-[#FFFFFF]" /> }
];

export default function NavBar() {
  return (
    <div className="w-56 min-h-screen bg-[#202121]  px-4 py-6 flex flex-col justify-between ">
      <div className="space-y-3 ">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-3 py-2  rounded-lg cursor-pointer ${
              item.active
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-500 text-gray-700"
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium text-[#FFFFFF]">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 text-gray-500 hover:text-blue-500 cursor-pointer">
        <ArrowLeftOnRectangleIcon className="h-5 w-5" />
        <span className="text-sm font-medium">Log out</span>
      </div>
    </div>
  );
}
