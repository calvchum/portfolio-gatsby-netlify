import React from "react"
import styled from "styled-components"
import { BannerLinks } from "./bannerlinks"
import { SubheaderText, media } from "../utilities"
import * as data from "../constants/contactInfo"
import githubLogo from "../images/icons/githubLogo.svg"
import instagramLogo from "../images/icons/instagramLogo.svg"
import linkedinLogo from "../images/icons/linkedinLogo.svg"
import featuredProjectEcze from "../images/ECZE projectCard.png"
import Img from "gatsby-image"

const MidSectionWrapper = styled.div`
	border: 1px dashed orange;
	display: grid;
	grid-template-columns: 1fr 2fr;
	${media.med`
		border: 5px dashed purple
		grid-template-columns: 1fr;
	`}
`

const BannerLinkContainer = styled.div`
	border: 1px dashed teal;
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: space-evenly;
`

const FeaturedProjectContainer = styled.div`
	display: grid;
	grid-template-rows: repeat(3, auto);
`

const FeaturedProjectHeadingContainer = styled.div`
	text-align: center;
`
const FeaturedProjectHeading = styled(SubheaderText)`
	margin-bottom: 1.5em;
`

const FeaturedProjectCardContainer = styled.div``

const iconArray = [
	{ name: "githubLogo", icon: githubLogo },
	{ name: "instagramLogo", icon: instagramLogo },
	{ name: "linkedinLogo", icon: linkedinLogo },
]

data.contactData.forEach(object => {
	iconArray.forEach(logo => {
		if (object.icon === logo.name) {
			return (object.src = logo.icon)
		}
	})
})

export const Midsection = () => (
	<MidSectionWrapper>
		<BannerLinkContainer>
			{data.contactData
				.filter(item => item.title !== "Email")
				.map((e, i) => {
					return <BannerLinks data={e} key={i} />
				})}
		</BannerLinkContainer>
		<FeaturedProjectContainer>
			<FeaturedProjectHeadingContainer>
				<SubheaderText>Featured work</SubheaderText>
			</FeaturedProjectHeadingContainer>
			<FeaturedProjectCardContainer>
				{/* Instead of an image, */}
				<img src={featuredProjectEcze} />
			</FeaturedProjectCardContainer>
		</FeaturedProjectContainer>
	</MidSectionWrapper>
)
