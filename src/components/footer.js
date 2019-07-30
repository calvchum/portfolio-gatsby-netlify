import React from "react"
import styled from "styled-components"
import { colors } from "../utilities/Colors"
import { SubheaderText } from "../utilities/Fonts"
import Navigation from "./navigation"
import * as data from "../constants/contactInfo"

const FooterWrapper = styled.section`
	display: grid;
	grid: repeat(2, auto) / 3fr 2fr;
	padding: 3em;
	background: white;
	justify-content: left;
`
const AccentText = styled(SubheaderText)`
	color: ${colors.primary};
	font-weight: 300;
`

const FooterNavWrapper = styled.ul`
	display: grid;
	grid: 120px / repeat(4, auto);
	grid-gap: 3em;
	margin: 0em;
	justify-content: flex-end;
	align-items: center;
`

const Footer = () => (
	<FooterWrapper>
		<div>
			<SubheaderText>Want to work together?</SubheaderText>
			<AccentText>Let's talk</AccentText>
		</div>
		<FooterNavWrapper>
			<Navigation list={data.contactData} internal={false} />
		</FooterNavWrapper>
	</FooterWrapper>
)

export default Footer
