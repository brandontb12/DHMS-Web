import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';

const BlogLandingContent = ({ props, data }) => {
    const { edges } = data.allMarkdownRemark;

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
                </section>
                <section id="two" className="spotlights">
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
                </section>
            </div>

        </Layout>
    )
}

export default BlogLandingContent;