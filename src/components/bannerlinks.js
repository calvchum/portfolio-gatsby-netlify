import React from "react"
import styled from "styled-components"
import { colors, paddingDefaults, BodyText } from "../utilities"
import Navigation from "./navigation"
import * as data from "../constants/contactInfo"
import githubLogo from "../images/icons/githubLogo.svg"
import instagramLogo from "../images/icons/instagramLogo.svg"
import linkedinLogo from "../images/icons/linkedinLogo.svg"

const Icon = styled.img`
	padding: 0em 1.2em 0em 1.2em;
	margin-bottom: 0;
	width: 100%
	justify-self: center;
	align-self: center;
`
const CenteredBodyText = styled(BodyText)`
	text-align: center;
	align-self: center;
	margin-bottom: 0.5em;
`

const IndividualIconWrapper = styled.a`
	font-family: "Work Sans";
	font-weight: "400";
	width: 5em;
	max-height: 5em;
	list-style: none;
	align-content: center;
	color: ${colors.almostBlack};
	text-decoration: none;
	transition: 0.2s;
	&:hover {
		color: ${colors.primary};
		text-decoration: none;
	}
`

export const BannerLinks = ({ data, logo }) => (
	<>
		<IndividualIconWrapper href={data.link}>
			<CenteredBodyText>{data.alt}</CenteredBodyText>
			<Icon src={data.src} />
		</IndividualIconWrapper>
	</>
)
