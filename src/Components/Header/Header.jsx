import React from 'react';

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
                                    <img src="https://th.bing.com/th/id/OIP.VTvFhMknsUUHdluKqJkKCwHaHa?pid=ImgDet&w=512&h=512&rs" />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;