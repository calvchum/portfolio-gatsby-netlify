import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {
  media,
  colors,
  SubheaderText,
  HeaderText,
  BodyText,
} from "../utilities"
import styled from "styled-components"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const BlogPostContainer = styled.div`
    color: ${colors.almostBlack};
    padding: 3em 0 3em 3em;
  `
  return (
    <Layout>
      <BlogPostContainer>
        <div className="blog-post">
          <HeaderText>{frontmatter.title}</HeaderText>
          <BodyText>{frontmatter.date}</BodyText>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </BlogPostContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
