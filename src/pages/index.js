import React from 'react';
// import { Button } from 'reactstrap'
//import { Link } from 'gatsby'
//import Helmet from 'react-helmet'
//import Layout from '../components/layout'
import HomeContent from '../components/HomeContent';
//import Banner from '../components/Banner'
import { graphql, StaticQuery } from "gatsby";

//import pic01 from '../assets/images/pic01.jpg'
//import pic02 from '../assets/images/pic02.jpg'
//import pic03 from '../assets/images/pic03.jpg'
//import pic04 from '../assets/images/pic04.jpg'
//import pic05 from '../assets/images/pic05.jpg'
//import pic06 from '../assets/images/pic06.jpg'
//import contractPic from '../assets/images/contract.jpg'
//import flagPic from '../assets/images/DHMSFlag.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <StaticQuery
                query={graphql`
                    query {
                      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                        edges {
                          node {
                            frontmatter {
                              title
                              date(formatString: "MMM Do, YYYY")
                            }
                            excerpt(pruneLength:150)
                          }
                        }
                      }
                    }
                `}
                render={data => (
                    <HomeContent data={data} />
                )}
            />
        );
    }
}

export default HomeIndex;