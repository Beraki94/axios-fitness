import {Link, NavLink} from "react-router-dom";
import {links} from "../../data";
import Logo from "../../images/aflogo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import './NavBar.css'
import { useState } from "react";
import PopUpModal from "../modal/PopUpModal";

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <header>
      <nav class="nav">
        <Link to="/" ><img src={Logo}className="nav-logo" alt="" onClick={() => setIsNavShowing(false)}/></Link>
        <ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`} >
          {
            links.map(({name, path}, index) => {
              return(
                <li key={index} onClick={() => setIsNavShowing(prev => !prev)}><NavLink to={path}>{name}</NavLink></li>
              )
            })
          }
        </ul>
        
        <PopUpModal/>
        <a className="nav-menu-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdClose /> : <FaBars />
          }
        </a>
      </nav>
    </header>
  )
}

export default NavBar