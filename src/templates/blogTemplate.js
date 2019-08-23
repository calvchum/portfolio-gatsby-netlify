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
import rubyIcon from "../images/icons/ruby.svg"
import expressIcon from "../images/icons/javascript.svg"
import firebaseIcon from "../images/icons/firebase.svg"
import gatsbyIcon from "../images/icons/gatsby.svg"
import mongodbIcon from "../images/icons/mongodb.svg"
import nodeIcon from "../images/icons/node.svg"
import reactIcon from "../images/icons/react2.svg"
import shopifyIcon from "../images/icons/shopify1.svg"
import contentfulIcon from "../images/icons/contentful.svg"
import netlifyIcon from "../images/icons/netlify.svg"
import graphqlIcon from "../images/icons/graphql.svg"

export default function Template({ data }) {
  const iconArray = [
    { title: "figma", icon: figmaIcon },
    { title: "ruby", icon: rubyIcon },
    { title: "express", icon: expressIcon },
    { title: "firebase", icon: firebaseIcon },
    { title: "gatsby", icon: gatsbyIcon },
    { title: "mongodb", icon: mongodbIcon },
    { title: "node", icon: nodeIcon },
    { title: "react", icon: reactIcon },
    { title: "shopify", icon: shopifyIcon },
    { title: "contentful", icon: contentfulIcon },
    { title: "netlify", icon: netlifyIcon },
    { title: "graphql", icon: graphqlIcon },
  ]

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
  const ProjectHeaderText = styled(HeaderText)`
    text-align: left;
    padding-left: 64px;
    grid-column: 2 / -1;
    color: ${colors.almostBlack};
    ${media.small`
      text-align: center;
      padding: 0;
      grid-column: 1 / -1;
      `};
  `

  const DateContainer = styled.div`
    padding-left: 4em;
    grid-column: 2 / -1;
    ${media.small`
      padding: 0;
      text-align: center;
      grid-column: 1 / -1;
      `};
  `

  const IconContainer = styled.div`
    margin: 1em 0 1em 0;
    padding-top: 3em;
    grid-row: 3/3;
    display: flex;
    flex-direction: column;
    ${media.small`
      grid-column: 1 / -1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `}
  `

  const TagList = styled.li`
    list-style: none;
    margin-right: 1em;
    ${media.small`
      display: inline;
    `}
  `

  const ProjectBody = styled.div`
    grid-column: 2 / -1;
    grid-row: 3 / 4;
    padding: 4em;
    & a {
      text-decoration: none;
      color: ${colors.primary};
      transition: 0.2s;
      font-weight: 300;
    }
    & a:hover {
      color: ${colors.almostBlack};
    }
    & p {
      font-weight: 200;
      colors: ${colors.almostBlack};
    }
    & h3 {
      font-weight: 400;
      color: ${colors.almostBlack};
    }
    & h4 {
      color: ${colors.almostBlack};
    }
    & b,
    strong {
      font-weight: 400;
    }
    ${media.small`
      grid-row: 4 / 5;
      grid-column: 1 / -1;
      padding: 2em 1.5em 0em 1.5em;
    `}
  `
  const TechIcon = styled.img`
    height: 50px;
    margin-bottom: 1.5em;
  `

  // return <TagList key={i}>{tag}</TagList>

  return (
    <Layout>
      <Fade>
        <BlogPostContainer>
          <ProjectHeaderText>{frontmatter.title}</ProjectHeaderText>
          <DateContainer>{frontmatter.date}</DateContainer>
          <IconContainer>
            {frontmatter.tags
              ? frontmatter.tags.map((tag, i) => {
                  return iconArray.map(icon => {
                    if (tag === icon.title) {
                      return (
                        <TechIcon src={icon.icon} alt={`${icon.title} logo`} />
                      )
                    } else {
                      return null
                    }
                  })
                })
              : null}
          </IconContainer>
          <ProjectBody dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPostContainer>
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
