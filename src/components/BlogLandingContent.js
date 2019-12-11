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
                <title>Blogs - Forty by HTML5 UP</title>
                <meta name="description" content="Blogs" />
            </Helmet>

            <BannerLanding title="Blogs" />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Sed amet aliquam</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                        Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero.
                        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                    </div>
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