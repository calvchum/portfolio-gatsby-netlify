import React from "react"
import styled from "styled-components"
import { SubheaderText, media, colors } from "../utilities"
import Img from "gatsby-image"
import { Link } from "gatsby"
import * as data from "../constants/projectInfo"
import { ProjectCard } from "./projectcard"

const AdditionalWorkWrapper = styled.div`
	flex: grid,
	grid-template-rows: repeat( 4, auto);
	${media.med`
		grid-template-columns: 1fr;
	`}
	& a {
		color: ${colors.almostBlack};
		text-decoration: none;
		transition: 0.2s;
	}
	& a:hover {
		color: ${colors.white};
	}	
	& div:hover {
		background-color: ${colors.primary}
	}
`
const ProjectTitle = styled(SubheaderText)`
	margin: 0;
	text-align: left;
	padding: 2em 0 1em 1.5em;
	${media.med`
		display: flex
		justify-content: center;
	`}
	${media.med`
		padding: 2em 0 1em 0;
	`}
`

const ProjectLink = styled(Link)`
	&:hover {
		& h2 {
			color: white
		}
	}
	& h2 {
		font-size: 1.5em;
		padding-bottom: 0em;
		margin-bottom: 0;
		color: ${colors.primary};
	}
		${media.small`
		padding: 0;
		`};
	}

`

export const AdditionalWork = () => (
	<AdditionalWorkWrapper>
		<ProjectTitle>Additional Work</ProjectTitle>
		{data.projects.map((project, i) => {
			return (
				<ProjectLink to={project.link}>
					<ProjectCard project={project} key={i} />
				</ProjectLink>
			)
		})}
	</AdditionalWorkWrapper>
)
