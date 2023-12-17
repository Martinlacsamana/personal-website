"use client"
import React from 'react';


const Navbar = () => {
   
    return (
        <nav className="flex justify-between px-10 py-5 bg-#26354d text-white">
        <div>
        
            
        <a href="/" className="text-2xl font-bold hover:underline cursor-pointer">Home</a>
            
        </div>
        <div className="space-x-10">
            <a href="/experiences" className="hover:underline cursor-pointer">Experiences</a>
            <a href="/projects" className="hover:underline cursor-pointer">Projects</a>
            <a href="/about" className="hover:underline cursor-pointer">About Me</a>
        </div>
        </nav>
    );
}

export default Navbar;