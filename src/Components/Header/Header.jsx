import React from 'react';

const Header = () => {
    return (
        <div>
            <nav>
                <div class="navbar bg-base-100 px-4 sm:px-20">
                    <div class="flex-1">
                        <a class="btn btn-ghost text-xl">Knowledge Cafe</a>
                    </div>
                    <div class="flex-none gap-2">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://th.bing.com/th/id/OIP.LKfBb02xsgMft8gcXY16IwHaHa?pid=ImgDet&w=500&h=500&rs=1" />
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