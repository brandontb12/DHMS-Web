import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Tagline from '../components/Tagline';
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import Contact from './Contact';

class HomeContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeout: false
        }
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        document.removeEventListener('mousedown', this.handleClickOutside);
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
                    <section id="one">
                        <div className="tile-home">
                            <Img fluid={this.props.data.head.childImageSharp.fluid} className="tile-home-pic"/>
                        </div>
                        <div className="dark-background">
                            <Tagline/>
                        </div>
                        <div className="section grid-wrapper light-background">                                
                            <div className="col-4">
                                <div className="section-callout left">
                                    <h3 className="section-subheader" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">HEALTH CARE ACQUISITION</h3>
                                    <h1 className="section-header" data-sal="zoom-in" data-sal-duration="900" data-sal-delay="300" data-sal-easing="ease-out-quart">ABOUT US</h1>
                                    <h3 className="section-subheader" data-sal="slide-down" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">TRANSFORMATION</h3>
                                </div>
                            </div>
                            <div className="col-8 section-content">
                                <p>The Defense Healthcare Management System (DHMS) Program Executive Office (PEO) was chartered to transform the delivery of healthcare and advance data sharing through a modernized electronic health record (EHR) for service members, veterans, and their families.</p>
                            </div>
                        </div>
                        <div className="section grid-wrapper light-background">
                            <div className="col-8">
                                <div className="grid-wrapper">
                                    <Link to="/contracting" className="link primary col-6" aria-label="Blog">
                                        <div className="contracting-img">
                                            <Img fluid={this.props.data.contractdivision.childImageSharp.fluid} className="org-img"/>
                                            <h3>Contracting Division</h3>
                                        </div>
                                    </Link>
                                    <Link to="/contracts" className="link primary col-6" aria-label="Contracts">
                                        <div className="contracting-img">
                                            <Img fluid={this.props.data.overview.childImageSharp.fluid} className="org-img"/>
                                            <h3>Resources</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="grid-wrapper ">
                                    <Link to="/dhmsm" className="link primary col-6" aria-label="Blog">
                                        <div className="contracting-img">
                                            <Img fluid={this.props.data.calendar.childImageSharp.fluid} className="org-img"/>
                                            <h3>Calendar</h3>
                                        </div>
                                    </Link>
                                    <Link to="/blog_landing" className="link primary col-6" aria-label="Opportunities">
                                        <div className="contracting-img">
                                            <Img fluid={this.props.data.blog.childImageSharp.fluid} className="org-img"/>
                                            <h3>Blog</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="section-callout right">
                                    <h3 className="section-subheader" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">FIND OUT MORE</h3>
                                    <h1 className="section-header" data-sal="zoom-in" data-sal-duration="900" data-sal-delay="300" data-sal-easing="ease-out-quart">CONNECT WITH US</h1>
                                    <h3 className="section-subheader" data-sal="slide-down" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">BECOME PART OF THE TEAM</h3>
                                </div>
                            </div>
                        </div>
                        <div className="section grid-wrapper light-background">
                            <div className="col-4">
                                <div className="section-callout left">
                                    <h3 className="section-subheader" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">PATIENT FOCUSED HEALTHCARE</h3>
                                    <h1 className="section-header" data-sal="zoom-in" data-sal-duration="900" data-sal-delay="300" data-sal-easing="ease-out-quart">WHO WE SUPPORT</h1>
                                    <h3 className="section-subheader" data-sal="slide-down" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">HEALTHCARE SYSTEM MODERNIZATION</h3>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="support-link">
                                    <Link to="/jomis" className="link primary" aria-label="jomis">
                                        <BackgroundImage fluid={this.props.data.jomislogo.childImageSharp.fluid} className="support-img">
                                            <h3 className="jomis-link-text">Joint Operational Medicine Information Systems Program Management Office</h3>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                                <div className="support-link">
                                    <Link to="/dhmsm" className="link primary" aria-label="jomis">
                                        <BackgroundImage fluid={this.props.data.ship.childImageSharp.fluid} className="support-img">
                                            <h3 className="jomis-link-text">DoD Healthcare Management System Modernization Program Management Office</h3>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                                <div className="support-link">
                                    <Link to="/dhmsm" className="link primary" aria-label="jomis">
                                        <BackgroundImage fluid={this.props.data.dhmsflag.childImageSharp.fluid} className="support-img">
                                            <h3 className="jomis-link-text">Federal Electronic Health Record Modernization</h3>
                                        </BackgroundImage>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="section grid-wrapper light-background">
                            <div className="col-4 section-content">
                                <Img fluid={this.props.data.health.childImageSharp.fluid} className="org-img"/>
                            </div>
                            <div className="col-4 section-content">
                                <p>Women's Health</p>
                                <p>While women and men have many of the same health issues, women may be affected differently than men. In addition, there are some conditions which are unique to women. Familiarity with women's health issues, regualr screenings and prevention are keys to maintaining good health...</p>
                            </div>
                            <div className="col-4">
                                <div className="section-callout right">
                                    <h3 className="section-subheader" data-sal="slide-up" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">NEWS</h3>
                                    <h1 className="section-header" data-sal="zoom-in" data-sal-duration="900" data-sal-delay="300" data-sal-easing="ease-out-quart">STAY UP TO DATE</h1>
                                    <h3 className="section-subheader" data-sal="slide-down" data-sal-duration="2000" data-sal-delay="800" data-sal-easing="ease-out-quart">OPPORTUNITIES</h3>
                                </div>
                            </div>
                        </div>
                    </section>
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