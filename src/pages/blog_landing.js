import React from 'react';
import BlogLandingContent from '../components/BlogLandingContent';
import { graphql, StaticQuery } from "gatsby";

const BlogLanding = (props) => (
    <StaticQuery 
        query={graphql`
                    query {
                      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                        edges {
                          node {
                            id
                            frontmatter {
                              title
                              date(formatString: "MMM Do, YYYY")
                              picture {
                                 publicURL
                              }
                            }
                            excerpt
                          }
                        }
                      }
                    }
                `}
        render={data => (
            <BlogLandingContent data={data} />
        )}
    />
)

export default BlogLanding