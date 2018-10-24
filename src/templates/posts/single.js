import React from 'react';

import Layout from '../../components/layout';
import { graphql } from 'gatsby'


function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title } = post.frontmatter;
    return (
        <Layout>
            <div className="leading-normal mb-32">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export default BlogPost;
export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
       }
   }
}`