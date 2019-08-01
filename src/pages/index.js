import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { colors, SubheaderText } from "../utilities"
import { HeroBanner } from "../components/herobanner"
import { BannerLinks } from "../components/bannerlinks"
import { Midsection } from "../components/midsection"
import { AdditionalWork } from "../components/additionalwork"

const AccentText = styled(SubheaderText)`
	color: ${colors.primary};
`
const TextWrapper = styled.div``

const MainWrapper = styled.div`
	max-width: 960px;
	margin: 4rem auto;
	border: 2px dashed red;
`

const MidSectionContainer = styled.div`
	border: 1px dashed orange;
	display: grid;
	grid-template-columns: 1fr 2fr;
`

const BannerLinkWrapper = styled.div`
	border: 1px dashed blue;
	min-height: 50vh;
`
const BannerLinkContainer = styled.div`
	border: 1px dashed teal;
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: space-evenly;
`

const IndexPage = () => (
	<Layout>
		<SEO title="Calvin B Cheung" />
		<MainWrapper>
			<HeroBanner />
			<Midsection />
			<AdditionalWork />
		</MainWrapper>
	</Layout>
)

export default IndexPage
