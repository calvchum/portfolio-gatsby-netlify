import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { colors, SubheaderText } from "../utilities"

const AccentText = styled(SubheaderText)`
  color: ${colors.primary};
`
const TextWrapper = styled.div`
  justify-content: inline;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Calvin B Cheung" />
    <TextWrapper>
      <SubheaderText>I'm Calvin B. Cheung, a </SubheaderText>
      <AccentText>react developer</AccentText>{" "}
      <SubheaderText>and</SubheaderText> <AccentText>entrepeneur</AccentText>
      <SubheaderText>from Melbourne</SubheaderText>
    </TextWrapper>
  </Layout>
)

export default IndexPage
