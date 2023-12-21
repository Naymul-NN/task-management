import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        try {
            logOut();
            Swal.fire({
                title: 'log out successfull!',
                text: 'have a good day',
                icon: 'success'
            });
            // If you are using react-toastify for toasts
            // toast.success('Sign out successful');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="navbar bg-indigo-300 w-[90%] mx-auto fixed z-50 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="hover:bg-pink-500 px-4 py-2 rounded-md"><Link to="/">Home</Link></li>
                            <li className="hover:bg-pink-500 px-4 py-2 rounded-md mx-7"><Link to="/about">About</Link></li>
                            {
                                user && <li className="hover:bg-pink-500 px-4 py-2 rounded-md"><Link to="/dashbord">Dashboard</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Manage Your Time</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menuv  menu-horizontal px-1">
                        <li className="hover:bg-pink-500 px-4 py-2 rounded-md"><Link to="/">Home</Link></li>
                        <li className=" hover:bg-pink-500 px-4 py-2 mx-7 rounded-md active:bg-red-400 "><Link to="/about">About</Link></li>
                        {
                                user && <li className="hover:bg-pink-500 px-4 py-2 rounded-md"><Link to="/dashbord">Dashboard</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="/register" className="btn btn-accent">Let&apos;s Explore </Link> */}
                    {
                        user ?
                            <button onClick={handleLogout} className="btn  btn-secondary ">log out</button>
                            :

                            <Link to="/login"><button className="btn  btn-secondary  ">Let&apos;s Explore</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;