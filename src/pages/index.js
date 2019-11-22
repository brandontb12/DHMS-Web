import React from 'react'
// import { Button } from 'reactstrap'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
//import Banner from '../components/Banner'

import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import contractPic from '../assets/images/contract.jpg'
import flagPic from '../assets/images/DHMSFlag.jpg'
import overviewPic from '../assets/images/overview.jpg'
import blogPic from '../assets/images/blog.jpg'

class HomeIndex extends React.Component {
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
                        <article style={{backgroundImage: `url(${flagPic})`}}>
                            <header className="major">
                                <h3>Defense Healthcare Management Systems</h3>
                                <br/>
                                <h2>The Program Executive Office, Defense Healthcare Management Systems (PEO DHMS) was chartered to transform the delivery of healthcare and advance data sharing for service members, veterans, and their families.</h2>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${contractPic})`}}>
                            <header className="major">
                                <h3 className="contract-header" >CONTRACT. WITH. US.</h3>
                                <div className="contract-link">
                                    <Link className="button contract" to="/">Organizations</Link>
                                    <Link className="button contract" to="/">Opportunities</Link>
                                    <Link className="button contract" to="/">Conferences</Link>
                                    <Link className="button contract" to="/">Training and Workshops</Link>
                                    <Link className="button contract" to="/">Publications</Link>
                                    <Link className="button contract" to="/">Blog</Link>
                                </div>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${overviewPic})`}}>
                            <header className="major">
                                <h3 className="contract-header">Program Overview</h3>
                                <h2>PEO DHMS is an acquisition organization with a direct reporting relationship to the Office of the Under Secretary of Defense for Acquisition and Sustainment (OUSD(A&S)), and administratively attached to the Defense Health Agency.</h2>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${blogPic})`}}>
                            <header className="major">
                                <h3 className="contract-header">Blogs</h3>
                                <h2 className="blog-info">Visit our blog page for all up to date news regarding DHMS</h2>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>DoD/VA Interagency Program Office (IPO)</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>DoD Healthcare Management System Modernization (DHMSM)</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Joint Operational Medicine Information Systems (JOMIS)</h3>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex