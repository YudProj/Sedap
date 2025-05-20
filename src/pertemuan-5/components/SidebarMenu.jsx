// src/components/SidebarMenu.jsx
import { MdOutlineDashboardCustomize, MdLocalGroceryStore } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";

export default function SidebarMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <MdOutlineDashboardCustomize className="mr-4 text-xl" /> Dashboard
          </div>
        </li>
        <li>
          <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <MdLocalGroceryStore className="mr-4 text-xl" /> Orders
          </div>
        </li>
        <li>
          <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <RiCustomerService2Line className="mr-4 text-xl" /> Customers
          </div>
        </li>
        <li>
          <div id="menu-4" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <TbMessageReport className="mr-4 text-xl" /> Reports
          </div>
        </li>
      </ul>
    </div>
  );
}
