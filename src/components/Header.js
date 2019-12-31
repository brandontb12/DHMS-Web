import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Header = ({ props }) => {
    return (
        <StaticQuery
            query={query}
            render={data => (
                <>
                    <Fragment>
                        <Navbar id="header" className="alt">
                            <Img className="pic-attributes" fixed={data.file.childImageSharp.fixed} />
                            <Nav.Link target="_top" href="/" className="logo"><span class="header">DEFENSE HEALTH MANAGEMENT SYSTEMS</span>&nbsp;<span class="subheader">Program Executive Office</span></Nav.Link>
                        </Navbar>
                        <Navbar className="nav-bar">
                            <Nav.Link target="_top" className="nav-tabs" href="/">Home</Nav.Link>
                            <Nav.Link target="_top" className="nav-tabs" href="/landing">Landing</Nav.Link>
                            <Nav.Link target="_top" className="nav-tabs" href="/generic">Generic</Nav.Link>
                            <Nav.Link target="_top" className="nav-tabs" href="/elements">Elements</Nav.Link>
                        </Navbar>
                    </Fragment>
                </>
            )}
        />
    );
};

export const query = graphql`
    query {
        file(relativePath: { eq: "dhms-logo.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

Header.propTypes = {
    onToggleMenu: PropTypes.func
};

export default Header;
