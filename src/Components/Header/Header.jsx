import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 px-20">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Knowledge Cafe</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://th.bing.com/th/id/OIP.VTvFhMknsUUHdluKqJkKCwHaHa?pid=ImgDet&w=512&h=512&rs=1" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;