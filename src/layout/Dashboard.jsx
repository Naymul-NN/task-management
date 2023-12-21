import {  FaHome, FaList, FaUtensils } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
    
    return (
        <div className="w-[90%] mx-auto" >
            <h1 className="text-3xl text-center py-6">See your activity</h1>
            <div className="flex">
                <div className="w-64 min-h-screen bg-pink-300">
                    <ul className="menu">

                      
                        <li> <NavLink to="/dashbord/adminHome">
                            <FaHome></FaHome>
                            My profile</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/addpackage">
                            <FaUtensils></FaUtensils>
                            Add package</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/manageusers">
                            <FaList></FaList>
                             Manage users</NavLink>
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