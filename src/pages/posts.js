import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="no-underline text-black" >
          <div className="post-list ">
            <h1 className="mb-2 hover:text-grey-dark">{node.frontmatter.title}</h1>
            <span className="block mb-2 text-grey-darker">{node.frontmatter.date}</span>
            <p className="max-w-lg">{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default IndexPage;
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`