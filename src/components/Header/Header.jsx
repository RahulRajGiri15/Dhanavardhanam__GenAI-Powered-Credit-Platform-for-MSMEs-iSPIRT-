
import React from "react";
import logo from './logo.png';


const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      {/* <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dhanavardhanam (MSME Credit Access Platform)</h1> */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Dhanavardhanam Logo" className="h-10" /> {/* Adjust height as needed */}
        
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-zinc-100 tracking-wide">
          DhanaVardhanam
        </h1>
        
        {/* Tagline */}
        <p className="text-sm italic text-white-200">MSME Credit Access Platform</p>  
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
