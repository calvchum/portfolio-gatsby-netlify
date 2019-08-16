import React from "react"
import styled from "styled-components"
import { SubheaderText, media } from "../utilities"
import Img from "gatsby-image"
import * as data from "../constants/projectInfo"
import { ProjectCard } from "./projectcard"

const AdditionalWorkWrapper = styled.div`
	flex: grid,
	grid-template-rows: repeat( 4, auto);
	${media.med`
		grid-template-columns: 1fr;
	`}
`
const ProjectTitle = styled(SubheaderText)`
	text-align: left;
	padding-left: 2em;
	${media.med`
		display: flex
		justify-content: center;
	`}
`
console.log(data.projects)

export const AdditionalWork = () => (
	<AdditionalWorkWrapper>
		<ProjectTitle>Additional Work</ProjectTitle>
		{data.projects.map((project, i) => {
			return <ProjectCard project={project} key={i} />
		})}
	</AdditionalWorkWrapper>
)
