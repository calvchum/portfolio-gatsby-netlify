import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { colors, SubheaderText } from "../utilities"
import { HeroBanner } from "../components/herobanner"

const AccentText = styled(SubheaderText)`
  color: ${colors.primary};
`
const TextWrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO title="Calvin B Cheung" />
    <HeroBanner />
  </Layout>
)

export default IndexPage
