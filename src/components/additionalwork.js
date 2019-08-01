import React from "react"
import styled from "styled-components"
import { SubheaderText } from "../utilities"
import Img from "gatsby-image"
import * as data from "../constants/projectInfo"
import { ProjectCard } from "./projectcard"

const AdditionalWorkWrapper = styled.div`
	flex: grid,
	grid-template-rows: repeat( 4, auto);
`
const AdditionalWorkHeaderContainer = styled.div`
	text-align: left;
	padding-left: 2em;
	border: 2px dashed grey;
`
console.log(data.projects)

export const AdditionalWork = () => (
	<AdditionalWorkWrapper>
		<AdditionalWorkHeaderContainer>
			<SubheaderText>Additional Work</SubheaderText>
		</AdditionalWorkHeaderContainer>
		{data.projects.map((project, i) => {
			return <ProjectCard project={project} key={i} />
		})}
	</AdditionalWorkWrapper>
)
