import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {

    return  <nav className={classes.nav}>
                <div className={classes.item}>
                     <a href = "/profile"> Profile </a>
                </div>
                <div className={classes.item}>
                     <a  href = "/dialogs"> Messsages </a>
                </div>
                <div className={classes.item}>
                     <a  href = "/news"> News </a>
                </div>
                <div className={classes.item}>
                     <a  href = "/musik"> Musik </a>
                </div>
                <div className={classes.item}>
                     <a  href = "/settings"> Settings </a>
                </div>
            </nav>


  

}

export default Navbar;