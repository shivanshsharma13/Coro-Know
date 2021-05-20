import React, { useState } from 'react';
import "../../css/Header.css"
// import { FaBars } from 'react-icons/fa';
// import { ImCross } from 'react-icons/im';
import { MdTrackChanges } from 'react-icons/md';
import { RiHealthBookFill } from 'react-icons/ri';

import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.gif"
// import logo_s from "../../assets/logo.png"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import SickIcon from '@material-ui/icons/Sick';
import PeopleIcon from '@material-ui/icons/People';
// import { IconButton } from '@material-ui/core';
// import Button from '@material-ui/core/Button';


function Navbars() {

    // const [state, usestate] = useState(false);
    // const toggle = () => usestate(!state)
    const [expanded, setExpanded] = useState(false);

    const fonts = {

        fontSize: "25px"
    }
    return (

        <div className="Main__nav">

            <NavLink className="logo_link" to="/">
                <div className="logocon">
                    <p>Coro</p>
                    <img src={logo} alt="" />
                    <p>Know</p>
                </div>
            </NavLink>

            <Navbar fixed-top expanded={expanded} className="Navbars" expand="lg">
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto Navs">

                        <div className="NavItems">
                            <NavLink onClick={() => setExpanded(false)} to="/vaccine" className="navlink" exact activeClassName="active">
                                <LocalHospitalIcon fontSize="medium" />
                                <h5> Vaccine</h5>
                            </NavLink>



                            <NavLink onClick={() => setExpanded(false)} to="/tracker" className="navlink" exact activeClassName="active">
                                < MdTrackChanges style={fonts} ></ MdTrackChanges>
                                <h5> Tracker</h5>
                            </NavLink>


                            <NavLink onClick={() => setExpanded(false)} to="/healthcare" className="navlink" exact activeClassName="active">
                                <RiHealthBookFill style={fonts}></RiHealthBookFill>
                                <h5> Health care</h5>
                            </NavLink>



                            <NavLink onClick={() => setExpanded(false)} to="/aboutus" className="navlink" exact activeClassName="active">
                                <PeopleIcon fontSize="medium"></PeopleIcon>
                                <h5> About Us</h5>
                            </NavLink>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>


    );
}

export default Navbars;
