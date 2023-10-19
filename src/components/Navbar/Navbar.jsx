import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} container`}>

      {/* mutitple class name ese use karenge  */}
        <div className={styles.logo}>
          {/* single classs name se use karenge  */}
            <img className={styles.logoimg} src="/images/logo.png" alt="logo"  />
            {/* ak bat jo yad rakhne ki jis ne mujhe bht desturb kia wo ye k kabhi bhi css modules men class name k between _ or - ye use nahi krna he  */}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Services</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
