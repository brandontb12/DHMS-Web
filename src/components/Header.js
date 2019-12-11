import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap'
import logo from "../assets/images/dhms-logo.png"

const Header = (props) => (
    // <header id="header" className="alt">
    //     <img src={logo}></img>
    //     <Link to="/" className="logo"><span class="header">DEFENSE HEALTH MANAGEMENT SYSTEMS</span>&nbsp;<span class="subheader">Program Executive Office</span></Link>
    //     <nav>
    //         <a className="menu-link" onClick={props.onToggleMenu} to="javascript:;">Menu</a>
    //     </nav>
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/landing">Landing</Link></li>
    //         <li><Link to="/generic">Generic</Link></li>
    //         <li><Link to="/elements">Elements</Link></li>
    //     </ul>
    // </header>
    <>
    <Navbar id="header" className="alt">
        <img className="pic-attributes" src={logo}></img>
        <Link target="_top" to="/" className="logo"><span class="header">DEFENSE HEALTH MANAGEMENT SYSTEMS</span>&nbsp;<span class="subheader">Program Executive Office</span></Link>
    </Navbar>
    <Navbar className="nav-bar">
        <Link className="nav-tabs" to="/">Home</Link>
        <Link className="nav-tabs" to="/landing">Landing</Link>
        <Link className="nav-tabs" to="/generic">Generic</Link>
        <Link className="nav-tabs" to="/elements">Elements</Link>
    </Navbar>
    </>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
