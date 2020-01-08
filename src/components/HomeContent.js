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

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Helmet
                    title="DEFENSE HEALTH MANAGEMENT SYSTEMS"
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
                                    <header className="major">
                                        <h3>Defense Healthcare Management Systems</h3>
                                        <br/>
                                        <h2>The Program Executive Office, Defense Healthcare Management Systems (PEO DHMS) was chartered to transform the delivery of healthcare and advance data sharing for service members, veterans, and their families.</h2>
                                    </header>
                                    <Link to="/landing" className="link primary" aria-label="landing"></Link>
                            </article>
                        </BackgroundImage>
                        <BackgroundImage fluid={this.props.data.contract.childImageSharp.fluid} className="tile-60">
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
                        </BackgroundImage>
                        <BackgroundImage fluid={this.props.data.dodflag.childImageSharp.fluid} className="tile-33">
                            <article className="tile-accent-5">
                                <header className="major">
                                    <h3 style={{marginBottom : '7vh'}}>DoD/VA Interagency Program Office (IPO)</h3>
                                    <h2 className="three-article-h2">Leads the DoD and Veterans Affairs' (VA) efforts to implement national health data standards to ensure interoperability among the DoD, VA, and private sector healthcare worldwide.</h2>
                                </header>
                                <Link to="/landing" className="link primary" aria-label="landing"></Link>
                            </article>
                        </BackgroundImage>
                        <BackgroundImage fluid={this.props.data.modern.childImageSharp.fluid} className="tile-33">
                            <article className="tile-accent-6">
                                <header className="major">
                                    <h3>DoD Healthcare Management System Modernization (DHMSM)</h3>
                                    <h2 className="three-article-h2">Oversees the acquisition and deployment of MHS GENESIS. Defense Medical Information Exchange (DMIX) provides technical solutions for seamless data sharing and interoperable EHRs that will evolve with national standards.</h2>
                                </header>
                                <Link to="/landing" className="link primary" aria-label="landing"></Link>
                            </article>
                        </BackgroundImage>
                        <BackgroundImage fluid={this.props.data.jomis.childImageSharp.fluid} className="tile-33">
                            <article className="tile-accent-7">
                                <header className="major">
                                    <h3 style={{marginTop : '8vh'}}>Joint Operational Medicine Information Systems (JOMIS)</h3>
                                    <h2 className="three-article-h2">Leads the acquisition and deployment of MHS GENESIS in operational medicine while sustaining the Theater Medical Information Program-Joint (TMIP-J) products. Mobile Computing Capability (MCC) is a medical application that allows first responders to document patient status and treatments rendered at the point of injury.</h2>
                                </header>
                                <Link to="/landing" className="link primary" aria-label="landing"></Link>
                            </article>
                        </BackgroundImage>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header>
                                <h2></h2>
                            </header>
                            <p></p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next" aria-label="landing">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

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
        }
    `)
    return (
        <HomeContent data={data}/>
    )
}