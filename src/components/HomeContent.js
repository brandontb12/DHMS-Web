import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import Contact from './Contact';

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
                            <Img fluid={this.props.data.head.childImageSharp.fluid} className="tile-home-pic"/>
                            {/* <div className="tile-home-text light-background">
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
                            </div> */}
                        </div>
                        <article className="light-background">
                            <div className="section grid-wrapper">                                
                                <div className="col-4">
                                    <div className="section-callout">
                                        <h3 className="section-subheader" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">HEALTH CARE ACQUISITION</h3>
                                        <h1 className="section-header" data-sal="zoom-in" data-sal-duration="900" data-sal-delay="300" data-sal-easing="ease-out-quart">ABOUT US</h1>
                                        <h3 className="section-subheader" data-sal="slide-down" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">TRANSFORMATION</h3>
                                    </div>
                                </div>
                                <div className="col-8 section-content">
                                    <p>The Defense Healthcare Management System (DHMS) Program Executive Office (PEO) was chartered to transform the delivery of healthcare and advance data sharing through a modernized electronic health record (EHR) for service members, veterans, and their families.</p>
                                </div>
                            </div>
                        </article>
                        <article className="tile-accent-2 tile-orgs light-background">
                            <header className="orgs">
                                <div className="org-row">
                                    <Link to="/contracting" className="link primary" aria-label="Blog">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.contractdivision.childImageSharp.fluid} className="org-img"/>
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
                                            <Img fluid={this.props.data.calendar.childImageSharp.fluid} className="org-img"/>
                                            <h3>Calendar</h3>
                                        </div>
                                    </Link>
                                    <Link to="/blog_landing" className="link primary" aria-label="Opportunities">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.blog.childImageSharp.fluid} className="org-img"/>
                                            <h3>Blog</h3>
                                        </div>
                                    </Link>
                                </div>
                            </header>
                        </article>
                        <div className="light-background">
                            <div className="grid-wrapper section">
                                <div className="section-callout">
                                    <h4 className="section-subheader">PATIENT FOCUSED HEALTHCARE</h4>
                                    <h1 className="section-header">
                                        WHO WE SUPPORT
                                    </h1>
                                    <h4 className="section-subheader">HEALTHCARE SYSTEM MODERNIZATION</h4>
                                </div>
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
                                            <h1 className="jomis-link-text">Federal Electronic Health Record Modernization</h1>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="tile-opportunity-container light-background">
                            <div className="opportunity-row">
                                <div className="opportunity-column">
                                    <Img fluid={this.props.data.health.childImageSharp.fluid} className="org-img"/>
                                    <h1>Women's Health</h1>
                                    <h2>While women and men have many of the same health issues, women may be affected differently than men. In addition, there are some conditions which are unique to women. Familiarity with women's health issues, regualr screenings and prevention are keys to maintaining good health...</h2>
                                </div>
                                <div className="opportunity-column">
                                <Img fluid={this.props.data.health.childImageSharp.fluid} className="org-img"/>
                                    <h1>Women's Health</h1>
                                    <h2>While women and men have many of the same health issues, women may be affected differently than men. In addition, there are some conditions which are unique to women. Familiarity with women's health issues, regualr screenings and prevention are keys to maintaining good health...</h2>
                                </div>
                                <div className="opportunity-text-column">
                                    <h3>NEWS</h3>
                                    <h4>STAY UP</h4>
                                    <h5>TO DATE</h5>
                                    <h6>OPPORTUNITIES</h6>
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
            head: file(base: { eq: "head.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
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
            contractdivision: file(base: { eq: "blog.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            blog: file(base: { eq: "computerblog.jpg" }) {
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
            health: file(base: { eq: "womenhealthpic.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            calendar: file(base: { eq: "calendar.jpg" }) {
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