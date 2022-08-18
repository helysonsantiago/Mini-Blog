import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../contexts/AuthContext";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

   const [ showLinks, setShowLinks] = useState(false);
        


  return (
    <nav className={styles.navbar} >
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <div  className={styles.box_links}> 
      <ul  className={`${styles.nav__links} ${showLinks ? styles[`nav__open`] : {}}`}>
        <li >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
            </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
            </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      
      </ul>
      <button 
      className={styles.biMenu} 
      onClick={() => setShowLinks(!showLinks)}
       >
      <BiMenu/>
      </button>
    </div>
    </nav>
  );
};

export default Navbar;
