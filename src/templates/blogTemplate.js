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
import Fade from "react-reveal/Fade"
import figmaIcon from "../images/icons/figma.svg"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const BlogPostContainer = styled.div`
    color: ${colors.almostBlack};
    padding: 2em 6em 6em 6em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    ${media.small`
      padding: 2em
      `}
  `
  const TagContainer = styled.ul`
    margin: 1em 0 1em 0;
    padding-top: 2em;
    grid-row: 3/3;
    ${media.small`
      grid-column: 1 / -1;
      display: flex;
      justify-content: center;
    `}
  `

  const TagList = styled.li`
    list-style: none;
    margin-right: 1em;
    ${media.small`
      display: inline;
    `}
  `

  const ProjectHeaderText = styled(HeaderText)`
    text-align: left;
    grid-column: 1 / -1;
  `
  const ProjectTextContainer = styled.div`
    grid-column: 2 / -1;
    grid-row: 3/4;
    padding: 2em;
    ${media.small`
      grid-row: 4 / 5;
      grid-column: 1 / -1;
    `}
  `
  const TechIcon = styled.img`
    width: 3em;
  `

  const DateContainer = styled.div``

  return (
    <Layout>
      <Fade>
        <BlogPostContainer>
          <ProjectHeaderText>{frontmatter.title}</ProjectHeaderText>
          <DateContainer>{frontmatter.date}</DateContainer>
          <TagContainer style={{ marginTop: "1em" }}>
            {frontmatter.tags
              ? frontmatter.tags.map((tag, i) => {
                  return <TagList key={i}>{tag}</TagList>
                })
              : null}
          </TagContainer>
          <ProjectTextContainer
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </BlogPostContainer>
        <TechIcon src={figmaIcon} alt="Figma icon" />
      </Fade>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM, YYYY")
        path
        title
        tags
      }
    }
    allFile(filter: { ext: { eq: ".svg" } }) {
      edges {
        node {
          name
          relativePath
        }
      }
    }
  }
`
