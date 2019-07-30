import React from "react"
import styled from "styled-components"
import { SubheaderText, paddingDefaults } from "../utilities"

const HeroBannerWrapper = styled.div`
	display: grid;
	grid: repeat(2, auto) / 1fr;
	justify-content: left;
	margin: 0em;
	padding: ${paddingDefaults.topBottom} 0em;
	max-width: 960px;
	margin: 0 auto;
`
const HeroBannerText = styled.div`
	max-width: 800px;
	margin: 0 auto;
`

export const HeroBanner = () => (
	<HeroBannerWrapper>
		<HeroBannerText>
			<SubheaderText>
				I'm Calvin Cheung, a front-end developer from Melbourne
			</SubheaderText>
			<SubheaderText>
				Currently lead developer at Darkgreen Designs
			</SubheaderText>
			<SubheaderText>
				I believe life is about the journey of mastery
			</SubheaderText>
		</HeroBannerText>
	</HeroBannerWrapper>
)
