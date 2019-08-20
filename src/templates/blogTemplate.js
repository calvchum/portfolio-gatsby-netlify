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
    padding: 5em;
  `
  const TagList = styled.li`
    list-style: none;
  `

  const TagContainer = styled.ul`
    margin: 1em 0 1em 0;
  `

  return (
    <Layout>
      <BlogPostContainer>
        <div className="blog-post">
          <HeaderText>{frontmatter.title}</HeaderText>
          <BodyText>{frontmatter.date}</BodyText>
          <TagContainer style={{ marginTop: "1em" }}>
            {frontmatter.tags
              ? frontmatter.tags.map((tag, i) => {
                  return <TagList>{tag}</TagList>
                })
              : null}
          </TagContainer>
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
        tags
      }
    }
  }
`
