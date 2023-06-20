import React from 'react';
import OffCanvas from "@/app/OffCanvas";

const NavBar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between mx-auto p-10 px-24">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ethan Hancock</span>

            <OffCanvas/>
        </nav>
    )
}

export default NavBar;
