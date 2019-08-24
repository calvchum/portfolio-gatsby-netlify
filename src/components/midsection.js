import React from "react"
import styled from "styled-components"
import { SubheaderText, media, colors } from "../utilities"
import * as data from "../constants/contactInfo"
import { Link } from "gatsby"
import githubLogo from "../images/icons/githubLogo.svg"
import instagramLogo from "../images/icons/instagramLogo.svg"
import linkedinLogo from "../images/icons/linkedinLogo.svg"
import featuredProjectEcze from "../images/ECZE projectCardsquarenoshadow.png"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

const MidSectionWrapper = styled.div`
	padding: 4em 0em 0em 0em;
	background: ${colors.grey};
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 2fr;
	${media.med`
		
		grid-template-columns: 1fr;
	`}
`

const BannerLinkContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: space-evenly;
	${media.med`
		padding-bottom: 3em;
	`}
`

const FeaturedProjectContainer = styled.div`
	display: grid;
	grid-column: 2 / 3;
	grid-template-rows: repeat(3, auto);
`

const FeaturedProjectHeadingContainer = styled.div`
	text-align: center;
`
const FeaturedProjectHeading = styled(SubheaderText)`
	margin-bottom: 1.5em;
`

const FeaturedProjectCardContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 5em;
`

const iconArray = [
	{ name: "githubLogo", icon: githubLogo },
	{ name: "instagramLogo", icon: instagramLogo },
	{ name: "linkedinLogo", icon: linkedinLogo },
]

const FeaturedImg = styled.img`
	max-height: 600px;
	transition: 0.1s;
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`

data.contactData.forEach(object => {
	iconArray.forEach(logo => {
		if (object.icon === logo.name) {
			return (object.src = logo.icon)
		}
	})
})

export const Midsection = () => (
	<MidSectionWrapper>
		<FeaturedProjectContainer>
			<FeaturedProjectHeadingContainer>
				<SubheaderText>Featured work</SubheaderText>
			</FeaturedProjectHeadingContainer>
			<FeaturedProjectCardContainer>
				<Link to="/projects/ecze">
					<FeaturedImg
						src={featuredProjectEcze}
						style={{ maxHeight: "600px" }}
					/>
				</Link>
				{/* Instead of an image, */}
			</FeaturedProjectCardContainer>
		</FeaturedProjectContainer>
	</MidSectionWrapper>
)
