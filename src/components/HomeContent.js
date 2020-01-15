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
                        <BackgroundImage fluid={this.props.data.dhmsflag.childImageSharp.fluid} className="tile-40">
                            <article className="tile-accent-1">
                                    <header>
                                        <h2>CUSTOMER-FOCUSED QUALITY-DRIVEN HEALTHCARE MARKETING</h2>
                                        <h3>Defense Healthcare Management Systems</h3>
                                    </header>
                            </article>
                        </BackgroundImage>
                        <article className="tile-accent-2 tile-tag-line light-background">
                            <header className="tag-line">
                                <h3>DEDICATED TO YOUR ONLINE SUCCESS</h3>
                                <br/>
                                <h2>The Program Executive Office, Defense Healthcare Management Systems (PEO DHMS) was chartered to transform the delivery of healthcare and advance data sharing for service members, veterans, and their families. PEO DHMS is an acquisition organization with a direct reporting relationship to the Office of the Under Secretary of Defense for Acquisition and Sustainment (OUSD(A&S)), and administratively attached to the Defense Health Agency.</h2>
                            </header>
                        </article>
                        <article className="tile-accent-2 tile-orgs light-background">
                            <header className="orgs">
                                <h3>PEOPLE DRESS TO IMPRESS.</h3>
                                <h3>WE WEB DESIGN BUSINESS IN SUCCESS</h3>
                                <div className="org-row">
                                    <Link to="/blog_landing" className="link primary" aria-label="Blog">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.blog.childImageSharp.fluid} className="org-img"/>
                                            <h3>Blogs</h3>
                                            <h2>Latest Available News</h2>
                                        </div>
                                    </Link>
                                    <Link to="/contracts" className="link primary" aria-label="Contracts">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.contract.childImageSharp.fluid} className="org-img"/>
                                            <h3>Contracts</h3>
                                            <h2>Start Ups, Business, Development</h2>
                                        </div>
                                    </Link>
                                    <Link to="/organization" className="link primary" aria-label="Organizations">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.overview.childImageSharp.fluid} className="org-img"/>
                                            <h3>Organizations</h3>
                                            <h2>Start Ups, Business, Development</h2>
                                        </div>
                                    </Link>
                                </div>
                                <div className="org-row" style={{marginTop:"5vh"}}>
                                    <Link to="/dhmsm" className="link primary" aria-label="Blog">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.jomis.childImageSharp.fluid} className="org-img"/>
                                            <h3>DHMSM</h3>
                                            <h2>Start Ups, Business, Development</h2>
                                        </div>
                                    </Link>
                                    <Link to="/jomis" className="link primary" aria-label="Opportunities">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.modern.childImageSharp.fluid} className="org-img"/>
                                            <h3>JOMIS</h3>
                                            <h2>Start Ups, Business, Development</h2>
                                        </div>
                                    </Link>
                                    <Link to="/conferences" className="link primary" aria-label="Organizations">
                                        <div className="org-column">
                                            <Img fluid={this.props.data.dodflag.childImageSharp.fluid} className="org-img"/>
                                            <h3>Conferences</h3>
                                            <h2>Start Ups, Business, Development</h2>
                                        </div>
                                    </Link>
                                </div>
                            </header>
                        </article>
                        {/* <BackgroundImage fluid={this.props.data.contract.childImageSharp.fluid} className="tile-60">
                            <article className="tile-accent-2">
                                    <header className="major">
                                    <h3 className="contract-header" >CONTRACT WITH US</h3>
                                    <div className="contract-link">
                                        <Link className="button contract" to="/organization" aria-label="Organizations">Organizations</Link>
                                        <Link className="button contract" to="/opportunities" aria-label="Opportunities">Opportunities</Link>
                                        <Link className="button contract" to="/conferences" aria-label="Conferences">Conferences</Link>
                                        <Link className="button contract" to="/training_workshops" aria-label="Training and Workshops">Training and Workshops</Link>
                                        <Link className="button contract" to="/publication" aria-label="Publications">Publications</Link>
                                        <Link className="button contract" to="/blog_landing" aria-label="Blog">Blog</Link>
                                    </div>
                                </header>
                            </article>
                        </BackgroundImage>
                        <BackgroundImage fluid={this.props.data.overview.childImageSharp.fluid} className="tile-60">
                            <article className="tile-accent-3">
                                <header className="major">
                                    <h3 className="contract-header">Program Overview</h3>
                                    <h2>PEO DHMS is an acquisition organization with a direct reporting relationship to the Office of the Under Secretary of Defense for Acquisition and Sustainment (OUSD(A&S)), and administratively attached to the Defense Health Agency.</h2>
                                </header>
                                <Link to="/landing" className="link primary" aria-label="landing"></Link>
                            </article>
                        </BackgroundImage>
                        <BackgroundImage fluid={this.props.data.blog.childImageSharp.fluid} className="tile-40">
                            <article className="tile-accent-4">
                                <header className="major">
                                    <h3 className="contract-header">Blogs</h3>
                                    <h2 className="blog-info">Visit our blog page for all up to date news regarding DHMS</h2>
                                </header>
                                <Link to="/blog_landing" className="link primary" aria-label="Blog"></Link>
                            </article>
                        </BackgroundImage> */}
                    </section>
                    <section id="two" className="tiles">
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
            dhmsflag: file(base: { eq: "dhmsflag.jpg" }) {
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
        }
    `)
    return (
        <HomeContent data={data}/>
    )
}