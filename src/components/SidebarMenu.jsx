import { AiOutlineUserAdd } from "react-icons/ai"; 
import { BiMessageAltError } from "react-icons/bi"; 
// src/components/SidebarMenu.jsx
import {
  MdOutlineDashboardCustomize,
  MdLocalGroceryStore,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbMessageReport } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function SidebarMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdOutlineDashboardCustomize className="mr-4 text-xl" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/Orders" className={menuClass}>
            <MdLocalGroceryStore className="mr-4 text-xl" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/Customers" className={menuClass}>
            <RiCustomerService2Line className="mr-4 text-xl" /> Customers
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-6" to="/Users" className={menuClass}>
            <AiOutlineUserAdd  className="mr-4 text-xl" />{" "}
            List Account
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-5" to="/400" className={menuClass}>
          <BiMessageAltError  className="mr-4 text-xl text-red-500" />{" "}
            Error 400
          </NavLink>
        </li>

        <li>
          <NavLink id="menu-4" to="/401" className={menuClass}>
            <BiMessageAltError  className="mr-4 text-xl text-red-500" />{" "}
            Error 401
          </NavLink>
        </li>
       
        <li>
          <NavLink id="menu-6" to="/403" className={menuClass}>
            <BiMessageAltError  className="mr-4 text-xl text-red-500" />{" "}
            Error 403
          </NavLink>
        </li>

       


      </ul>
    </div>
  );
}
