import React from 'react';
import HomeContent from '../components/HomeContent';
import { graphql, StaticQuery } from "gatsby";

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