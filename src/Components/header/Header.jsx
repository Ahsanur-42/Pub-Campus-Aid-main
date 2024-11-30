import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to close the dropdown after clicking a link
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const links = (
        <>
            <li onClick={closeDropdown}> <NavLink to="/">Home</NavLink></li>
            <li onClick={closeDropdown}> <NavLink to="/routine">Routine</NavLink></li>
            <li onClick={closeDropdown}> <NavLink to="/questionBank">Question Bank</NavLink></li>
            <li onClick={closeDropdown}> <NavLink to="/resources">Resources</NavLink></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={toggleDropdown}
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {links}
                            </ul>
                        )}
                    </div>
                    <a className="btn btn-ghost text-xl">Campus Aide</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;