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
    //         <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
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
        <Nav.Link href="/" className="logo"><span class="header">DEFENSE HEALTH MANAGEMENT SYSTEMS</span>&nbsp;<span class="subheader">Program Executive Office</span></Nav.Link>
    </Navbar>
    <Navbar className="nav-bar">
        <Nav.Link className="nav-tabs" href="/">Home</Nav.Link>
        <Nav.Link className="nav-tabs" href="/landing">Landing</Nav.Link>
        <Nav.Link className="nav-tabs" href="/generic">Generic</Nav.Link>
        <Nav.Link className="nav-tabs" href="/elements">Elements</Nav.Link>
    </Navbar>
    </>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
