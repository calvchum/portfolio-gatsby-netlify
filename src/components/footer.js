import React from "react"
import styled from "styled-components"
import { colors, media, SubheaderText, BodyText } from "../utilities"
import Navigation from "./navigation"
import * as data from "../constants/contactInfo"
import Fade from "react-reveal/Fade"

const FooterWrapper = styled.section`
	display: grid;
	grid: repeat(2, auto) / 3fr 2fr;
	padding: 5em 3em 3em 3em;
	background: white;
	justify-content: left;
	${media.med`
		padding: 2em 0 4em 0;
	`}
`
const AccentText = styled(SubheaderText)`
	color: ${colors.primary};
	font-weight: 300;
	margin: 0;
`

const FooterNavWrapper = styled.ul`
	display: grid;
	padding: 2em 0 0 0;
	grid: 120px / repeat(4, auto);
	grid-gap: 3em;
	margin: 0;
	justify-content: left;
	${media.med`
		grid-column: 1 / -1;
		padding: 1em
		display: flex;
		justify-content: space-between;
	`}
`
const CTASubheader = styled(SubheaderText)`
	margin: 0.4em 0 0 0;
`

const CTA = styled.div`
	grid-column: 1 / -1;
	${media.med`
		padding: 1em
	`}
`
const MessageWrapper = styled.div`
	grid-row: 3/3;
	text-align: center;
	& p {
		font-size: 0.75em;
	}
`

const FooterBodyText = styled(BodyText)`
	grid-column: 1 / -1;
`

const Footer = () => (
	<FooterWrapper>
		<CTA>
			<CTASubheader>Want to work together?</CTASubheader>
			<Fade left>
				<AccentText>Let's talk.</AccentText>
			</Fade>
		</CTA>
		<FooterNavWrapper>
			<Navigation list={data.contactData} internal={false} />
		</FooterNavWrapper>
	</FooterWrapper>
)

export default Footer
