import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import classes from './Navbar.module.css'

const Navbar = (props) => {
debugger
     let friend = props.state.friendsOnline
                .map((friend) =>  friend.name + " " )


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

                <div className={classes.item}>
                     <div className={classes.friends}>
                         <NavLink  to = "/friends" activeClassName = {classes.activeLink}> Friends </NavLink>
                    {/* <div className={classes.friends}>
                          <div className={classes.numberCircle}></div>
                          <div className={classes.numberCircle}></div>
                          <div className={classes.numberCircle}></div>
                         {friend}
                    </div> */}

                         <div className={classes.container}>
                              <div className={classes.box}>
                                   <div className={classes.numberCircle}></div>
                                   <div className={classes.numberCircle}></div>
                                   <div className={classes.numberCircle}></div>
                              </div>
                              {friend}
                         </div>
                    </div>

               </div>
            </nav>


  

}

export default Navbar;