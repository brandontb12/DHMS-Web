import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from "../assets/images/dhms-logo.png"

const Header = (props) => (
    <header id="header" className="alt">
        <img src={logo}></img>
        <Link to="/" className="logo"><span class="header">DEFENSE HEALTH MANAGEMENT SYSTEMS</span>&nbsp;<span class="subheader">Program Executive Office</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
