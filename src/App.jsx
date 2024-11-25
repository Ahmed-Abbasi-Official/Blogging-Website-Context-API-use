import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { NavItemProvider } from "./Context/NavItemContext";
import { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaXmark } from "react-icons/fa6";
import Footer from "./Components/Footer/Footer";


function App() {
  const [NavItemContext,setNavitemContext] = useState({
    navItem: [
      { path: "/", link: "Home" },
      { path: "/services", link: "Services" },
      { path: "/about", link: "About" },
      { path: "/blogs", link: "Blogs" },
      { path: "/contact", link: "Contact" },
    ],



    navIcon: [
      { link: <FaLinkedin /> },
      { link: <FaInstagram /> },
      { link: <FaFacebook /> },
    ],
  });

  return (
    <NavItemProvider value={NavItemContext}>
      <Navbar  />
      <Outlet />
      <Footer/>
    </NavItemProvider>
  );
}

export default App;
