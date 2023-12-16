import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 py-5 bg-#26354d text-white">
      <div>
        <h1 className="text-2xl font-bold"></h1>
      </div>
      <div className="space-x-10">
        <a href="#experiences" className="hover:underline">Experiences</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#testimonies" className="hover:underline">Testimonies</a>
      </div>
    </nav>
  );
}

export default Navbar;;