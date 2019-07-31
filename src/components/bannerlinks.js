import React from "react"
import styled from "styled-components"
import { colors, paddingDefaults, BodyText } from "../utilities"
import Navigation from "./navigation"
import * as data from "../constants/contactInfo"
import githubLogo from "../images/icons/githubLogo.svg"
import instagramLogo from "../images/icons/instagramLogo.svg"
import linkedinLogo from "../images/icons/linkedinLogo.svg"

const ListItem = styled.li`
	font-family: "Work Sans";
	font-weight: "200";
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1em;
	outline: dashed blue 1px;
	& a {
		color: ${colors.almostBlack};
		text-decoration: none;
		transition: 0.2s;
	}
	& a:hover {
		color: ${colors.primary};
		text-decoration: none;
	}
`

const BannerLinksWrapper = styled.div`
	outline: 1px orange dashed;
	align-content: flex-start;
	max-width: 960px;
	margin: 0 auto;
	padding: ${paddingDefaults.topBottom} 0em;
`

const IconSectionWrapper = styled.div`
	outline: 1px red dashed;
	display: flex;
	grid-template-columns: repeat(auto-fit, minmax(250px, auto));
	grid-gap: 2em;
	justify-content: space-evenly;
	align-items: center;
	& a {
		color: ${colors.almostBlack};
		text-decoration: none;
		transition: 0.2s;
	}
	& a:hover {
		color: ${colors.primary};
		text-decoration: none;
	}
`

const Icon = styled.img`
	outline: 1px green dashed;
	padding: 1em;
	margin-bottom: 0;
`
const CenteredBodyText = styled(BodyText)`
	text-align: center;
`

const IndividualIconWrapper = styled.a`
	font-family: "Work Sans";
	font-weight: "400";
	list-style: none;
	margin-bottom: 0em;
	margin-left: 0em;
	outline: 1px blue dashed;
	max-width: 5em;
	&:nth-child(2) {
		text-align: justified;
	}
`

const item = data.contactData

export const BannerLinks = () => (
	<BannerLinksWrapper>
		<IconSectionWrapper>
			<IndividualIconWrapper href={item[0].link}>
				<Icon src={githubLogo} />
				<CenteredBodyText>{item[0].alt}</CenteredBodyText>
			</IndividualIconWrapper>
			<IndividualIconWrapper href={item[0].link}>
				<Icon src={linkedinLogo} />
				<CenteredBodyText>{item[1].alt}</CenteredBodyText>
			</IndividualIconWrapper>
			<IndividualIconWrapper href={item[0].link}>
				<Icon src={instagramLogo} />
				<CenteredBodyText>{item[2].alt}</CenteredBodyText>
			</IndividualIconWrapper>
		</IconSectionWrapper>
	</BannerLinksWrapper>
)
