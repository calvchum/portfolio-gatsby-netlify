import React from "react"
import styled from "styled-components"
import { SubheaderText, media } from "../utilities"
import Img from "gatsby-image"

const ProjectCardContainer = styled.div`
	min-height: 3em;
	box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	${media.small`
		grid-template-columns: 1fr 1fr 1fr
	`}
`
const ProjectHeading = styled(SubheaderText)`
	font-size: 1.5em;
	padding-top: 1.33em;
	padding-left: 1.33em;
	padding-bottom: 0em;
	margin-bottom: 0;
	${media.small`
		grid-column: 1 / -1;
		padding-bottom: 1em
	`}
`
const Info = styled.p`
	padding-top: 1.33em;
	padding: 1.5em;
`

const Tag = styled.li`
	padding-right: 1em;
	display: inline-block;
	margin: 0;
`

const TagContainer = styled.ul`
	padding-left: 1.33em;
	display: inline-block;
`

export const ProjectCard = ({ project }) => (
	<ProjectCardContainer>
		<ProjectHeading>{project.title}</ProjectHeading>
		<Info>{project.organisation}</Info>
		<Info>{project.date}</Info>
		<TagContainer>
			{project.tags.map((tag, i) => {
				return <Tag> {`${tag}`} </Tag>
			})}
		</TagContainer>
	</ProjectCardContainer>
)
