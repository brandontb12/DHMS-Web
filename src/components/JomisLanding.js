import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

class JomisLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
            <Helmet>
                <title>JOMIS</title>
                <meta name="description" content="JOMIS Page" />
                <html lang="en"/>
            </Helmet>

            <div id="main">
                <section id="one" className="tiles">
                    <article className="tile-accent-2 tile-jomis-tag-line dark-background">
                        <header className="jomis-tag">
                            <h3>JOINT OPERATIONAL MEDICINE INFORMATION SYSTEMS</h3>
                            <h3>PROGRAM MANAGEMENT OFFICE</h3>
                            <BackgroundImage fluid={this.props.data.background.childImageSharp.fluid} className="background-img">
                                <Img fluid={this.props.data.logo.childImageSharp.fluid} className="logo-img"/>
                            </BackgroundImage>
                        </header>
                    </article>
                    <article className="tile-accent-2 tile-jomis-overview light-background">
                        <header className="jomis-overview">
                            <h3>MISSION</h3>
                            <h2><i>Develop, deploy, and sustain MHS GENESIS and other integrated operational medicine information systems for the delivery of comprehensive health services to the deployed forces across the range of military operations.</i></h2>
                            <h3>OVERVIEW</h3>
                            <h2><i>JOMIS leverages MHS GENESIS as the core application for accessing, capturing, and documenting medical and dental care in the operational environment.</i></h2>
                            <br/>
                            <h2><i>JOMIS delivers new capabilities for healthcare delivery, medical command and control, medical situational awareness, medical logistics, and patient movement.</i></h2>
                            <Img fluid={this.props.data.ship.childImageSharp.fluid} className="overview-img"/>
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
            background: file(base: { eq: "jomisbackground.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            logo: file(base: { eq: "jomislogo1.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            ship: file(base: { eq: "jomisboat.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
    return (
        <JomisLanding data={data}/>
    )
}