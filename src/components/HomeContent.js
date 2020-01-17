import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BackgroundImage from 'gatsby-background-image';

import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
import pic05 from '../assets/images/pic05.jpg';
import pic06 from '../assets/images/pic06.jpg';
import contractPic from '../assets/images/contract.jpg';
import flagPic from '../assets/images/DHMSFlag.jpg';

//<article style={{ backgroundImage: `url(${flagPic})` }}>
//    <header className="major">
//        <h3>Defense Healthcare Management Systems</h3>
//        <br />
//        <h2>The Program Executive Office, Defense Healthcare Management Systems (PEO DHMS) was chartered to transform the delivery of healthcare and advance
//                                    data sharing for service members, veterans, and their families.</h2>
//    </header>
//    <Link to="/landing" className="link primary"></Link>
//</article>

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${flagPic})` }}>
                            <header className="major">
                                <h3>Defense Healthcare Management Systems</h3>
                                <br />
                                <h2>The Program Executive Office, Defense Healthcare Management Systems (PEO DHMS) was chartered to transform the delivery of healthcare and advance
                                                            data sharing for service members, veterans, and their families.</h2>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        
                        <article style={{ backgroundImage: `url(${contractPic})` }}>
                            <header className="major">
                                <h3 className="contract-header" >CONTRACT. WITH. US.</h3>
                                <div className="contract-link">
                                    <Link className="button contract" to="/organization">Organizations</Link>
                                    <Link className="button contract" to="/opportunities">Opportunities</Link>
                                    <Link className="button contract" to="/conferences">Conferences</Link>
                                    <Link className="button contract" to="/training_workshops">Training and Workshops</Link>
                                    <Link className="button contract" to="/publication">Publications</Link>
                                    <Link className="button contract" to="/blog_landing">Blog</Link>
                                </div>
                            </header>
                        </article>
                        <article style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>Organizational Corner</h3>
                                <h5>
                                    {this.props.data.allMarkdownRemark.edges[0].node.frontmatter.title} - {this.props.data.allMarkdownRemark.edges[0].node.frontmatter.date}
                                </h5>
                                <p>
                                    {this.props.data.allMarkdownRemark.edges[0].node.excerpt}
                                </p>
                            </header>
                            <Link to="/blog_landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum
                                sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                                Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        );
    }
}

export default HomeContent;