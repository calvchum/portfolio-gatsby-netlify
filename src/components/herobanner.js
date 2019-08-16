import React from "react"
import styled from "styled-components"
import { SubheaderText, HeaderText, paddingDefaults } from "../utilities"

const HeroBannerWrapper = styled.div`
	border: 2px dashed purple;
	display: grid;
	grid-template-columns: 3fr 1fr;
`

const HeroBannerContainer = styled.div`
	height: 70vh;
	display: grid;
	grid: repeat(2, auto) / 1fr;
	justify-content: left;
	padding: 4em 2em;
	max-width: 960px;
	margin: 0 auto;
`
const HeroBannerText = styled.div`
	max-width: 800px;
	margin: 0 auto;
`

export const HeroBanner = () => (
	<HeroBannerWrapper>
		<HeroBannerContainer>
			<HeroBannerText>
				<HeaderText>
					I'm Calvin Cheung, a front-end developer from Melbourne
				</HeaderText>
				<HeaderText>Currently lead developer at Darkgreen Designs</HeaderText>
				<HeaderText>I believe life is about the journey of mastery</HeaderText>
			</HeroBannerText>
		</HeroBannerContainer>
	</HeroBannerWrapper>
)
