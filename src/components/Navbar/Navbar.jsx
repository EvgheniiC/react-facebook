import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {

    return  <nav className={classes.nav}>
                <div className={classes.item}>
                     <NavLink to = "/profile" activeClassName = {classes.activeLink}> Profile </NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink  to = "/dialogs" activeClassName = {classes.activeLink}> Messsages </NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink  to = "/news" activeClassName = {classes.activeLink}> News </NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink  to = "/musik" activeClassName = {classes.activeLink}> Musik </NavLink>
                </div>
                <div className={classes.item}>
                     <NavLink  to = "/settings" activeClassName = {classes.activeLink}> Settings </NavLink>
                </div>
            </nav>


  

}

export default Navbar;