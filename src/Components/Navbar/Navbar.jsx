import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import NavIcons from "./NavIcons";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  
  const [isBurger, setIsBurger] = useState(false);

  const toggleBurger = () => {
    setIsBurger(!isBurger);
  };
  useEffect(()=>console.log(isBurger),[isBurger])


  return (
    <header className="bg-black text-white ">
      <nav className="p-4 max-w-7xl mx-auto flex gap-14 justify-between items-center flex-wrap  ">
        <a className="text-2xl font-bold text-white" href="/">
          Abbasi<span className="text-orange-500">Blogs </span>
        </a>

        {/* nav item for large devices */}

        <NavItems />

        {/* Nav Icons */}

        <NavIcons />

        {/* Mobile Button */}
        {/* Mobile Menu */}
      </nav>
      <MobileNavbar isBurger={isBurger} toggleBurger={toggleBurger} />
    </header>
  );
};

export default Navbar;
