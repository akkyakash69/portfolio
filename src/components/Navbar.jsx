import React from 'react';
import { NavLink } from 'react-router-dom';
import GooeyNav from '../Animations/SplitText/GooeyNav';


const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" }, 
    
  ];

  return (
    <nav className="w-full fixed bg-[#0f0f0f] text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold text-purple-500">Akash Choppadandi</h1>

        <div className="flex gap-6 text-sm md:text-base">
          
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "text-purple-400 border-b-2 border-purple-500 pb-1"
                    : "text-white/80 hover:text-purple-300"
                }`
              }
              end={item.path === "/"} // ✅ Only for root route
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
