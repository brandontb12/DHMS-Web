import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from "gatsby-image";
import backgroundImage from 'gatsby-background-image';

import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';
import contractPic from '../assets/images/contract.jpg';
import flagPic from '../assets/images/dhmsflag.jpg';
import overviewPic from '../assets/images/overview.jpg'
import blogPic from '../assets/images/blog.jpg'
import ipopic from '../assets/images/dodva.jpg'
import BackgroundImage from 'gatsby-background-image';
import CongressVideo from '../assets/videos/FTICongress.webm'
import OverviewVideo from '../assets/videos/FTIOverview.webm'
import Contact from './Contact'

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Helmet title="DEFENSE HEALTH MANAGEMENT SYSTEMS"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                    <html lang="en"/>
                </Helmet>
                <div id="main">
                    <section id="one" className="tiles">
                        <div className="tile-home">
                            <Img fluid={this.props.data.dhmsflag.childImageSharp.fluid} className="tile-home-pic"/>
                            <div className="tile-home-text light-background">
                                <div className="org-row">
                                    <div className="tile-home-half-section">
                                        <h3>WHO ARE WE?</h3>
                                        <h2>ABOUT</h2>
                                        <h3>WHAT IS OUR GOAL?</h3>
                                    </div>
                                    <div className="tile-home-half-section">
                                        <h1>The Defense Healthcare Management System (DHMS) Program Executive Office (PEO) was chartered to transform the delivery of healthcare and advance data sharing through a modernized electronic health record (EHR) for service members, veterans, and their families.</h1>
                                    </div>
                                    <div className="tile-home-half-section">
                                        <h1>The Defense Healthcare Management System (DHMS) Program Executive Office (PEO) was chartered to transform the delivery of healthcare and advance data sharing through a modernized electronic health record (EHR) for service members, veterans, and their families.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article className="tile-accent-2 tile-orgs light-background">
                            <header className="orgs">
                                <div className="org-row">
                                    <Link to="/contracting" className="link primary" aria-label="Blog">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.blog.childImageSharp.fluid} className="org-img"/>
                                            <h3>Contracting Division</h3>
                                        </div>
                                    </Link>
                                    <Link to="/contracts" className="link primary" aria-label="Contracts">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.overview.childImageSharp.fluid} className="org-img"/>
                                            <h3>Resources</h3>
                                        </div>
                                    </Link>
                                    <div className="org-column-text">
                                        <h1>FIND OUT MORE</h1>
                                        <h2>CONNECT</h2>
                                        <h5>WITH US</h5>
                                        <h4>BECOME PART OF THE TEAM</h4>
                                        <h5></h5>
                                    </div>
                                </div>
                                <div className="org-row" style={{marginTop:"5vh"}}>
                                    <Link to="/dhmsm" className="link primary" aria-label="Blog">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.dodflag.childImageSharp.fluid} className="org-img"/>
                                            <h3>Calendar</h3>
                                        </div>
                                    </Link>
                                    <Link to="/blog_landing" className="link primary" aria-label="Opportunities">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.contract.childImageSharp.fluid} className="org-img"/>
                                            <h3>Blog</h3>
                                        </div>
                                    </Link>
                                </div>
                            </header>
                        </article>
                        <div className="tile-support-container light-background">
                            <div className="tile-support-text-column">
                                <h1>INFORMATION SYSTEMS</h1>
                                <h2>WHO WE</h2>
                                <h3>SUPPORT</h3>
                                <h4>HEALTHCARE MODERNIZATION</h4>
                            </div>
                            <div className="tile-support-link-column">
                                <div className="support-link">
                                    <Link to="/jomis" className="link primary" aria-label="jomis">
                                        <BackgroundImage fluid={this.props.data.jomislogo.childImageSharp.fluid} className="support-link-image">
                                            <h1 className="jomis-link-text">Joint Operational Medicine Information Systems Program Management Office</h1>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                                <div className="support-link support-link-two">
                                    <Link to="/dhmsm" className="link primary" aria-label="jomis">
                                        <BackgroundImage fluid={this.props.data.ship.childImageSharp.fluid} className="support-link-image">
                                            <h1 className="jomis-link-text">DoD Healthcare Management System Modernization Program Management Office</h1>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                                <div className="support-link support-link-three">
                                    <Link to="/dhmsm" className="link primary" aria-label="jomis">
                                        <BackgroundImage fluid={this.props.data.dhmsflag.childImageSharp.fluid} className="support-link-image">
                                            <h1 className="jomis-link-text">Place Holder Text</h1>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section id="two" className="tiles">
                        <article className="tile-accent-2 tile-vids dark-background">
                            <div className="vids">
                                <div className="vid-row">
                                    <div className="vid-column">
                                        <h2>FTI Congressional SBIR Hearing</h2>
                                        <video controls>
                                            <source src={CongressVideo} type="video/webm"/>
                                        </video>
                                    </div>
                                    <div className="vid-column">
                                        <h2>FTI Overview</h2>
                                        <video controls>
                                            <source src={OverviewVideo} type="video/webm"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section> */}
                </div>
                <Contact/>
            </Layout>
        );
    }
}

export default () => {
    const data = useStaticQuery(graphql `
        query {
            dhmsflag: file(base: { eq: "dhmsflag.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            dhmsflag1: file(base: { eq: "dhmsflag1.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            contract: file(base: { eq: "contract.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            overview: file(base: { eq: "overview.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            blog: file(base: { eq: "blog.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            dodflag: file(base: { eq: "dodva.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            modern: file(base: { eq: "jomis.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            jomis: file(base: { eq: "dhmsm.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            homelogo: file(base: { eq: "homeicon.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            jomislogo: file(base: { eq: "jomoslogo3.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            ship: file(base: { eq: "cleanship.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
    return (
        <HomeContent data={data}/>
    )
}