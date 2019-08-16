import React from "react"
import styled from "styled-components"
import { SubheaderText, media, colors } from "../utilities"
import Img from "gatsby-image"

const ProjectCardContainer = styled.div`
	min-height: 3em;
	padding: 1em 0 1em 3em;
	box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	${media.small`
		grid-template-columns: 1fr
		justify-content: center;

	`}
`

const HeadingContainer = styled.div`
	${media.small`
		grid-column: 1 / -1;
		text-align: left;
	`}
`
const ProjectHeading = styled(SubheaderText)`
	font-size: 1.5em;
	padding-bottom: 0em;
	margin-bottom: 0;
	color: ${colors.primary};
`
const Info = styled.p`
	font-weight: 100;
	margin: 9.6px 0 0 0;
	${media.small`
		grid-column: 1 / -1;
		text-align: left;
		margin: 0;
	`}
`

const TagContainer = styled.ul`
	font-weight: 100;
	margin: 0.5em 0 0 0;
`
const Tag = styled.li`
	padding-right: 0.5em;
	display: inline-block;
	margin: 0;
`

export const ProjectCard = ({ project }) => (
	<ProjectCardContainer>
		<HeadingContainer>
			<ProjectHeading>{project.title}</ProjectHeading>
			<TagContainer>
				{project.tags.map((tag, i) => {
					return <Tag> {`${tag}`} </Tag>
				})}
			</TagContainer>
		</HeadingContainer>
		<Info>{project.organisation}</Info>
		<Info>{project.date}</Info>
	</ProjectCardContainer>
)
