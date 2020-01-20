import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from "gatsby-image";
// import BannerLanding from '../components/BannerLanding';

class BlogLandingContent extends React.Component  {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Blogs</title>
                    <meta name="description" content="Blogs" />
                    <html lang="en"/>
                </Helmet>

                {/* <BannerLanding title="Blogs" /> */}

                <div id="main">
                    <section id="one" className="tiles">
                        <article className="tile-accent-2 tile-blog-tag dark-background">
                            <div className="blog-tag">
                                <h3>DEFENSE HEALTHCARE MANAGEMENT SYSTEMS</h3>
                            </div>
                        </article>
                        <article className="tile-accent-2 tile-blog-section light-background">
                            <div className="blog-section">
                                <div className="blog-text-left">
                                    <h3>Year in Review</h3>
                                    <h2>For the Military Health System, 2019 was a year of great change; implementation of the new electronic health record, MHS GENESIS, was unveiled in several locations; administration of military treatment facilities in the U.S. transferred from the Services to DHA; a new DHA Director assumed his new...</h2>
                                    <Link className="button contract" to="/organization">READ MORE</Link>
                                </div>
                                <div className="img-right">
                                    <Img fluid={this.props.data.yearreview.childImageSharp.fluid} className="actual-img"/>
                                </div>
                            </div>
                            <div className="blog-section">
                                <div className="img-left">
                                    <Img fluid={this.props.data.globalhealth.childImageSharp.fluid} className="actual-img"/>
                                </div>
                                <div className="blog-text-right">
                                    <h3>Global Health</h3>
                                    <h2>Health and Human Services Secretary Alex Azar describes the work of the international crew of the USNS Comfort as "near miraculus". He was abroad the U.S. Navy hospital ship during its deployment to South America earlier this year and saw firsthand the impact of forward deployed health and ...</h2>
                                    <Link className="button contract" to="/organization">READ MORE</Link>
                                </div>
                            </div>
                            <div className="blog-section">
                                <div className="blog-text-left">
                                    <h3>Women's Health Month</h3>
                                    <h2>While women and men have many of the same health issues, women may be affected differently than me. In addition, there are some conditions which are unique to women. Familiarity with women's health issues, regular screenings and prevention are keys to maintaining good health.</h2>
                                    <Link className="button contract" to="/organization">READ MORE</Link>
                                </div>
                                <div className="img-right">
                                    <Img fluid={this.props.data.womenhealth.childImageSharp.fluid} className="actual-img"/>
                                </div>
                            </div>
                            <div className="blog-section">
                                <div className="img-left">
                                    <Img fluid={this.props.data.totalfitness.childImageSharp.fluid} className="actual-img"/>
                                </div>
                                <div className="blog-text-right">
                                    <h3>Total Force Fitness</h3>
                                    <h2>Fitness of mind, body, and spirit is inherently connected with military service. But the understanding of this relationship is constantly evolving as our operational and familiy commitments change. For 2020, the Military Health System is focusing on Total Force Fitness, a comprehensive framework for ...</h2>
                                    <Link className="button contract" to="/organization">READ MORE</Link>
                                </div>
                            </div>
                        </article>
                    </section>
                    {/* <section id="two" className="spotlights">
                        {edges.map(({ node }) => (
                            <section key={node.id}>
                                <Link to="/generic" className="image">
                                    <img src={node.frontmatter.picture.publicURL} alt="" />
                                </Link>
                                <div className="content">
                                    <div className="inner">
                                        <header className="major">
                                            <h3>{node.frontmatter.title} - {node.frontmatter.date}</h3>
                                        </header>
                                        <p>{node.excerpt}</p>
                                        <ul className="actions">
                                            <li><Link to="/generic" className="button">Learn more</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </section> */}
                </div>

            </Layout>
        )
    }
}

export default () => {
    const data = useStaticQuery(graphql `
        query {
            yearreview: file(base: { eq: "yearreviewpic.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            globalhealth: file(base: { eq: "globalhealthpic.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            womenhealth: file(base: { eq: "womenhealthpic.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            totalfitness: file(base: { eq: "totalfitnesspic.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
    return (
        <BlogLandingContent data={data}/>
    )
}

// export default BlogLandingContent;