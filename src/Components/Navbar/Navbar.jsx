import React,{useState} from 'react';
import logo from "../../assets/logo.png"
import {navItems} from "../../constants/index"
import {Menu , X} from "lucide-react";


function Navbar() {
    const [menu, setMenu] = useState(false);
    const toggleNavbar = () =>{
      setMenu(!menu);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">DevHaven</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-gray-700 to-gray-900 py-3 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {menu ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
        {menu && (
          <div className="fixed right-0 Z-20 bg-neutral-900 w-full py-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-4">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-gray-700 to-gray-900 py-3 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
