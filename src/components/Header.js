import React from 'react'

function Header() {
    return (
      <header className="bg-purple-500 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">PB Webcraft</div>
        <nav className="space-x-4 hidden md:block">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Clients</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hidden md:block">Call Now</button>
      </header>
    );
  };

export default Header