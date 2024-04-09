import React from 'react';
import Link from "next/link";
import Logo from "./Logo";

function Header2() {
    return (
        <nav className="flex justify-between bg-gray-800 h-16 align-center text-milk text-slate-100">
            <Logo />
            <div className="flex items-center mr-1">
                <Link className="font-black pr-14 text-3xl" href="/insurancedb">Insurance Dashboard</Link>
                <Link className="font-black pr-14 text-3xl" href="/insuranceacc">Insurance Provider Account</Link>
            </div>
        </nav>
    );
}

export default Header2;
