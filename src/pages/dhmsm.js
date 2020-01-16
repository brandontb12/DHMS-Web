import React from 'react';
import DHMSMLanding from '../components/DHMSMLanding';
import { graphql, StaticQuery } from "gatsby";

class DHMSM extends React.Component {
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
                    <DHMSMLanding data={data} />
                )}
            />
        );
    }
}

export default DHMSM;