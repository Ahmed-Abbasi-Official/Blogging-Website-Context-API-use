import React from 'react'
import useNavitem from '../../Context/NavItemContext'
import { NavLink } from 'react-router-dom'

const NavItems = () => {
    const NavtemContext = useNavitem()
  return (
    <>
        <ul className="lg:flex items-center gap-12 text-lg hidden">
          {NavtemContext.navItem.map(({ path, link }) => {
            return (
              <li key={path} className="text-white">
                <NavLink
                  to={path}
                  className={({isActive}) => {
                   return `${isActive ? "text-orange-500" : "text-white"}`
                  }}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
    </>
  )
  
}


export default NavItems