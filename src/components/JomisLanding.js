import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

class JomisLanding extends React.Component {
    render() {
        return (
            <Layout>
            <Helmet>
                <title>JOMIS</title>
                <meta name="description" content="JOMIS Page" />
                <html lang="en"/>
            </Helmet>

            <div className="program">
                <div className="program-tag-line grid-wrapper">
                    <div className="col-1"/>
                    <div className="col-2">
                        <Img fluid={this.props.data.logo2.childImageSharp.fluid}/>
                    </div>
                    <div className="col-7">
                        <h1 className="tag-line-header">JOINT OPERATIONAL MEDICINE INFORMATION SYSTEMS</h1>
                        <h2 className="tag-line-subheader">PROGRAM MANAGEMENT OFFICE</h2>
                    </div>
                </div>
                <div className="program-columns grid-wrapper">
                    <div className="col-1"/>
                    <div className="col-4 program-column-border">
                        <h1 className="column-header">Mission</h1>
                        <p className="column-paragraph">Develop, deploy, and sustain MHS GENESIS and other integrated operational medicine information
                            systems for the delivery of comprehensive health services to the deployed forces across the range of military operations.
                        </p>
                        <h1 className="column-header">Overview</h1>
                        <p className="column-paragraph">JOMIS leverages MHS GENESIS as the core application for accessing, capturing, and documenting
                            medical and dental care in the operational environment. JOMIS delivers new capabilities for healthcare delivery, medical
                            command and control, and medical situational awareness.
                        </p>
                    </div>
                    <div className="col-3 program-column-border">
                        <h1 className="column-header">Latest News</h1>
                        <h2 className="column-paragraph-header">2020 Projects &#38; Initiatives</h2>
                        <p className="column-paragraph">JOMIS has an exciting year ahead ...</p>
                        <h2 className="column-paragraph-header">JOMIS 2019 Year in Review</h2>
                        <p className="column-paragraph">JOMIS stayed busy throughout 2019 ...</p>
                        <h2 className="column-paragraph-header">JOMIS Exciting Projects for 2020</h2>
                        <p className="column-paragraph">JOMIS is on track with new projects ...</p>
                        <h2 className="column-paragraph-header">JOMIS Giving back to the Community</h2>
                        <p className="column-paragraph">JOMIS takes a look back on giving ...</p>
                    </div>
                    <div className="col-3">
                        <h1 className="column-header">Upcoming Events</h1>
                        <h2 className="column-paragraph-header">3/24/2020 Project Production</h2>
                        <p className="column-paragraph">JOMIS has an exciting project planned ...</p>
                        <h2 className="column-paragraph-header">3/29/2020 All Accounts Renewed</h2>
                        <p className="column-paragraph">JOMIS's new technology ready to be released ...</p>
                        <h2 className="column-paragraph-header">4/12/2020 Giving Back to the Community</h2>
                        <p className="column-paragraph">JOMIS is offering better health options ...</p>
                        <h2 className="column-paragraph-header">4/19/2020 New System Implementation</h2>
                        <p className="column-paragraph">JOMIS begans the system wide revamp ...</p>
                    </div>
                    <div className="col-1"/>
                </div>
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
            pdf: file(base: { eq: "Butterworth_GSA_format_resume.pdf" }) {
                publicURL
            }
        }
    `)
    return (
        <JomisLanding data={data}/>
    )
}