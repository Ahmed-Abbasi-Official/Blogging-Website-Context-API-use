import React from 'react'
import useNavitem from '../../Context/NavItemContext'
import { NavLink } from 'react-router-dom';
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaXmark } from "react-icons/fa6";

const MobileNavbar = ({isBurger , toggleBurger}) => {
    const navitem = useNavitem();

  return (
    <>
            {/* Mobile Button */}

            <div className="lg:hidden cursor-pointer fixed top-0  right-0 p-6">
          <button onClick={toggleBurger}>
            <FaBars className='h-6 w-6'/>
          </button>
        </div>
             {isBurger ?      <div className='transform translate-x-[0px] -translate-y-[50px] transition-all ease-in duration-700'>
          <ul className={`lg:hidden text-lg  text-black bg-white gap-12 space-y-4 px-4 py-6 mt-14 fixed top-0  w-full `}>
          {navitem.navItem.map(({ path, link }) => {
            return (
              <li key={path} className="text-black">
                <NavLink
                  to={path}
                  onClick={toggleBurger}
                  className={({isActive}) => {
                   return `${isActive ? "text-orange-500" : "text-black"}`
                  }}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
          </div> :<div className='transform -translate-x-[800px] -translate-y-[50px] transition-all ease-in duration-700'>
          <ul className={`lg:hidden text-lg  text-black bg-white gap-12 space-y-4 px-4 py-6 mt-14 fixed top-0  w-full `}>
          {navitem.navItem.map(({ path, link }) => {
            return (
              <li key={path} className="text-black">
                <NavLink
                  to={path}
                  onClick={toggleBurger}
                  className={({isActive}) => {
                   return `${isActive ? "text-orange-500" : "text-black"}`
                  }}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
          </div>}
    </>
  )
}

export default MobileNavbar