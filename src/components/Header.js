import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap'
import logo from "../assets/images/logo-white.png"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
        <Navbar id="navHeader" className="header-top">
            <div className="grid-wrapper">
                <div className="logo-wrap col-1">
                    <img className="logo-img" src={logo} alt="DHMS Logo"></img>
                </div>
                <div className="header-container col-5">
                    <Link target="_top" to="/">
                        <div className="header">DEFENSE HEALTH MANAGEMENT SYSTEMS</div> 
                        <div className="subheader">Program Executive Office</div>
                    </Link>
                </div>
                
                <div className="nav-links col-6">
                    <Link className="nav-tabs" to="/">Home</Link>
                    <Link className="nav-tabs" to="/landing">Landing</Link>
                    <Link className="nav-tabs" to="/generic">Generic</Link>
                    <Link className="nav-tabs" to="/elements">Elements</Link>
                </div>
            </div>
        </Navbar> 
        );
    }
    
    propTypes = {
        onToggleMenu: PropTypes.func
    }

    componentDidMount() {
        
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {stickHeader()};

        // Get the header
        var header = document.getElementById("navHeader");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function stickHeader() {
            if (window.pageYOffset > sticky) {
                header.classList.remove("header-top");
            } else {
                header.classList.add("header-top");
            }
        }
    }
}

export default () => {
    return <Header />
}
