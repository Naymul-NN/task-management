import {  FaHome, FaList, FaUtensils } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
    
    return (
        <div className="w-[90%] mx-auto" >
            <h1 className="text-3xl text-center py-6 font-bold bg-orange-300">List here what you want to do</h1>
            <div className="flex">
                <div className="w-64 min-h-screen bg-indigo-900 text-white">
                    <ul className="menu">

                      
                        <li> <NavLink to="/dashbord/userHome">
                            <FaHome></FaHome>
                            My profile</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/addtodo">
                            <FaUtensils></FaUtensils>
                            Add new to do</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/managetask">
                            <FaList></FaList>
                             Task manage here</NavLink>
                       </li>
                       
                       <div className="divider"></div>
                       <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                       </li>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;