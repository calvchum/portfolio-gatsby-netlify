import React from "react"
import styled from "styled-components"
import {
	SubheaderText,
	HeaderText,
	paddingDefaults,
	media,
	colors,
} from "../utilities"
import { BannerLinks } from "./bannerlinks"
import * as data from "../constants/contactInfo"
import Fade from "react-reveal/Fade"

const HeroBannerWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
`

const HeroBannerContainer = styled.div`
	display: grid;
	padding: 3em 2em 4em 3em;
	grid: repeat(2, auto) / 1fr;
	justify-content: left;

	${media.med`
		grid-column: 1 / -1;
		padding: 2em 2em 6em 2em;
	`}
`
const HeroBannerText = styled.div`
	justify-content: left
	margin: 0 auto;
	& a {
		text-decoration: none;
		color: ${colors.primary};
		transition: 0.3s;
	}
	& a:hover {
		color: ${colors.almostBlack};
	}
	${media.med`
		font-size: 0.9em;
	`}
	${media.small`
		font-size: 0.75em;
	`}
`
const BannerLink = styled.a`
	text-decoration: none;
	color: ${colors.primary};
	&hover {
		color: ${colors.primary};
	}
`

const BannerLinkContainer = styled.div`
	padding-top: 4em;
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: left;
	${media.med`
		padding-bottom: 3em;
		justify-content: space-around;
	`}
`

export const HeroBanner = () => (
	<HeroBannerWrapper>
		<HeroBannerContainer>
			<Fade>
				<HeroBannerText>
					<HeaderText>
						I'm Calvin Cheung, a{" "}
						<a href="https://github.com/calvchum">React developer</a> from
						Melbourne
						<br />
						<br />
						Currently front-end developer at{" "}
						<a href="http://darkgreen.design">Darkgreen Designs</a>
						<br />
						<br />I believe life is about the journey of mastery
					</HeaderText>
				</HeroBannerText>
				<BannerLinkContainer>
					{data.contactData
						.filter(item => item.title !== "Email")
						.map((e, i) => {
							return <BannerLinks data={e} key={i} />
						})}
				</BannerLinkContainer>
			</Fade>
		</HeroBannerContainer>
	</HeroBannerWrapper>
)
