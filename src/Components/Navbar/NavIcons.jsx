import React from 'react'
import useNavitem from '../../Context/NavItemContext'
import { Link } from 'react-router-dom';

const NavIcons = () => {
    const NavIcon = useNavitem();
  return (
    <>
            <div className="lg:flex gap-8 items-center hidden">
          {NavIcon.navIcon.map(({ link }, idx) => (
            <a
              href="/"
              className="lg:hover:text-orange-500 text-xl font-bold "
              key={idx}
            >
              {link}
            </a>
          ))}
          <button className="lg:bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500  transition-all duration-300 ease-in ">
            Log in
          </button>
        </div>
    </>
  )
}

export default NavIcons