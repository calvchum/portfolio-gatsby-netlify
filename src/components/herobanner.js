import React from "react"
import styled from "styled-components"
import { SubheaderText, HeaderText, paddingDefaults, media } from "../utilities"

const HeroBannerWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
`

const HeroBannerContainer = styled.div`
	display: grid;
	grid: repeat(2, auto) / 1fr;
	justify-content: left;
	padding: 4em 2em;
	${media.med`
		grid-column: 1 / -1;
	`}
`
const HeroBannerText = styled.div`
	margin: 0 auto;
	${media.med`
		font-size: 0.9em;
	`}
	${media.small`
		font-size: 0.75em;
	`}
`

export const HeroBanner = () => (
	<HeroBannerWrapper>
		<HeroBannerContainer>
			<HeroBannerText>
				<HeaderText>
					I'm Calvin Cheung, a React developer from Melbourne
					<br />
					<br />
					Currently front-end developer at Darkgreen Designs
					<br />
					<br />I believe life is about the journey of mastery
				</HeaderText>
			</HeroBannerText>
		</HeroBannerContainer>
	</HeroBannerWrapper>
)
