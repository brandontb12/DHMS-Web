import React from 'react';
import JomisLanding from '../components/JomisLanding';
import { graphql, StaticQuery } from "gatsby";

class Jomis extends React.Component {
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
                    <JomisLanding data={data} />
                )}
            />
        );
    }
}

export default Jomis;