import { TbMessageReport } from "react-icons/tb"; 
; 
import { RiCustomerService2Line } from "react-icons/ri"; 
import { MdLocalGroceryStore } from "react-icons/md"; 
import { MdOutlineDashboardCustomize } from "react-icons/md"; 
import { MdDashboard } from "react-icons/md"; 
import SidebarMenu from "../components/SidebarMenu";

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
        {/* Logo */}
        <div id="sidebar-logo" className="flex flex-col">
            <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                Sedap <b id="logo-dot" className="text-hijau">.</b>
            </span>
            <span id="logo-subtitle" className="font-semibold text-gray-400">
                Modern Admin Dashboard
            </span>
        </div>


    <SidebarMenu/>

        {/* Menu-list<
        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <MdOutlineDashboardCustomize  className="mr-4 text-xl"/>  Dashboard
                    </div>
                </li>
                <li>
                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                       <MdLocalGroceryStore className="mr-4 text-xl"/> Orders
                    </div>
                </li>
                <li>
                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                        <RiCustomerService2Line className="mr-4 text-xl"/>Customers
                    </div>  
                </li>
                <li>
                    <div id="menu-4" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                       <TbMessageReport className="mr-4 text-xl"/> Reports
                    </div>
                </li>
            </ul>
        </div> */}

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto"> 
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span>Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full"src="https://avatar.iran.liara.run/public/28" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400 ">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}