import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("User logged out successfully");
        })
        .catch(error => {
            console.log(error.message);
        });
    };

    const navItems = (
        <>
            <li className="font-bold"><NavLink to='/'>Home</NavLink></li>
            <li className="font-bold"><NavLink to='/about'>About</NavLink></li>
            {user?.email ? (
               <>
                <li className="font-bold"><NavLink to='/bookings'>My Booking</NavLink></li>
                <li className="font-bold"><button onClick={handleLogOut}>Sign Out</button></li>
               </>
            ) : (
                <li className="font-bold"><NavLink to='/login'>Sign In</NavLink></li>
            )}
        </>
    );

    return (
        <div className="navbar h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;
