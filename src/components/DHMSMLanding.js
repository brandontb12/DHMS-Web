import React from 'react'
import Helmet from 'react-helmet'
import Layout from './layout'
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

class DHMSMLanding extends React.Component {
    render() {
        return (
            <Layout>
            <Helmet>
                <title>DHMSM</title>
                <meta name="description" content="JOMIS Page" />
                <html lang="en"/>
            </Helmet>

            <div id="main">
                <section id="one" className="tiles">
                    <article className="tile-accent-2 tile-jomis-tag-line dark-background">
                        <div className="jomis-tag">
                            <h3>DOD HEALTHCARE MANAGEMENT SYSTEM MODERNIZATION</h3>
                            <h3>PROGRAM MANAGEMENT OFFICE</h3>
                            <BackgroundImage fluid={this.props.data.cleanship.childImageSharp.fluid} className="background-img">
                                <Img fluid={this.props.data.dhmslogo.childImageSharp.fluid} className="modern-logo-img"/>
                            </BackgroundImage>
                        </div>
                    </article>
                    <article className="tile-accent-2 tile-jomis-overview light-background">
                        <header className="jomis-overview">
                            <h3>MISSION</h3>
                            <h2><i>Competitively acquire, test, deliver, integrate, and successfully transition to a state-of-the-market electronic health record system.</i></h2>
                            <h3>OVERVIEW</h3>
                            <h2><i>The DoD Healthcare Management System Modernization (DHMSM) Program Management Office oversees the deployment of MHS GENESIS as well as the operations and sustainment of the Joint Longitudinal Viewer (JVL).</i></h2>
                            <br/>
                            <h2><i>DHMSM effectively manages business operations, testing, systems engineering, future requirements, deployment, change management, communications, training, and legacy operations. This will ensure a successful deployment of MHS GENESIS to a complex and globally dispersed enterprise, with minimal disruption to the military healthcare community and beneficiaries.</i></h2>
                        </header>
                    </article>
                </section>
            </div>
            </Layout>
        );
    }
}

export default () => {
    const data = useStaticQuery(graphql `
        query {
            ship: file(base: { eq: "jomisboat.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            cleanship: file(base: { eq: "cleanship.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            logo2: file(base: { eq: "jomislogo2.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            logo3: file(base: { eq: "jomoslogo3.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            dhmslogo: file(base: { eq: "dhms-modern.png" }) {
                childImageSharp {
                  fluid(maxWidth:25, maxHeight: 25) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
    return (
        <DHMSMLanding data={data}/>
    )
}