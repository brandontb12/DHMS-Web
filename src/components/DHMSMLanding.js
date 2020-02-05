import React from 'react'
import Helmet from 'react-helmet'
import Layout from './layout'
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
// import file from '../assets/files/resume.pdf';

class DHMSMLanding extends React.Component {
    render() {
        return (
          <Layout>
          <Helmet>
              <title>DHMSM</title>
              <meta name="description" content="DHMSM Page" />
              <html lang="en"/>
          </Helmet>

          <div className="program">
              <div className="program-tag-line grid-wrapper">
                  <div className="col-1"/>
                  <div className="col-2">
                      <Img fluid={this.props.data.modern.childImageSharp.fluid}/>
                  </div>
                  <div className="col-7">
                      <h1 className="tag-line-header">DOD HEALTHCARE MANAGEMENT SYSTEM MODERNIZATION</h1>
                      <h2 className="tag-line-subheader">PROGRAM MANAGEMENT OFFICE</h2>
                  </div>
              </div>
              <div className="program-columns grid-wrapper">
                  <div className="col-1"/>
                  <div className="col-4 program-column-border">
                      <h1 className="column-header">Mission</h1>
                      <p className="column-paragraph">Competitively acquire, test, deliver, integrate, and successfully transition to a
                          state-of-the-market electronic health record system.
                      </p>
                      <h1 className="column-header">Overview</h1>
                      <p className="column-paragraph">DHMSM effectively manages business operations, testing, systems engineering, future requirements,
                          deployment, change management, communications, training, and legacy operations. This will ensure a successful deployment
                          of MHS GENESIS to a complex and globally dispersed enterprise, with minimal disruption to the military healthcare Community
                          and beneficiaries.
                      </p>
                  </div>
                  <div className="col-3 program-column-border">
                      <h1 className="column-header">Latest News</h1>
                      <h2 className="column-paragraph-header">2020 Projects &#38; Initiatives</h2>
                      <p className="column-paragraph">DHMSM has an exciting year ahead ...</p>
                      <h2 className="column-paragraph-header">DHMSM 2019 Year in Review</h2>
                      <p className="column-paragraph">DHMSM stayed busy throughout 2019 ...</p>
                      <h2 className="column-paragraph-header">DHMSM Exciting Projects for 2020</h2>
                      <p className="column-paragraph">DHMSM is on track with new projects ...</p>
                      <h2 className="column-paragraph-header">DHMSM Giving back to the Community</h2>
                      <p className="column-paragraph">DHMSM takes a look back on giving back ...</p>
                  </div>
                  <div className="col-3">
                      <h1 className="column-header">Upcoming Events</h1>
                      <h2 className="column-paragraph-header">3/24/2020 Project Production</h2>
                      <p className="column-paragraph">DHMSM has an exciting project planned ...</p>
                      <h2 className="column-paragraph-header">3/29/2020 All Accounts Renewed</h2>
                      <p className="column-paragraph">DHMSM's technology ready to be released ...</p>
                      <h2 className="column-paragraph-header">4/12/2020 Giving Back to the Community</h2>
                      <p className="column-paragraph">DHMSM is offering better health options ...</p>
                      <h2 className="column-paragraph-header">4/19/2020 New System Implementation</h2>
                      <p className="column-paragraph">DHMSM begans the system wide revamp ...</p>
                      {/* <a className="column-header" href={file} target="_blank">{this.props.data.pdf.name}</a> */}
                      {/* <a className="column-header" href={this.props.data.pdf.publicURL} target="_blank">PDF for future use</a> */}
                  </div>
                  <div className="col-1"/>
              </div>
          </div>
          </Layout>
        );
    }
}

export default () => {
    const data = useStaticQuery(graphql`
      {
        pdf: file(name: { eq: "resume" }) {
          name
          extension
          publicURL
        }
        modern: file(base: { eq: "modernhealthcare.jpeg" }) {
            childImageSharp {
                fluid {
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