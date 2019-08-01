import React from "react"
import styled from "styled-components"
import { SubheaderText } from "../utilities"
import Img from "gatsby-image"

const ProjectCardContainer = styled.div`
	min-height: 3em;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
`
const ProjectHeading = styled(SubheaderText)`
	padding-left: 0.5em;
	padding-bottom: 0em;
	margin-bottom: 0;
`

export const ProjectCard = ({ project }) => (
	<ProjectCardContainer>
		<ProjectHeading>{project.title}</ProjectHeading>
		<p style={{ padding: "1.5em" }}>{project.organisation}</p>
		<p style={{ padding: "1.5em" }}>{project.date}</p>
		<ul>
			{project.tags.map((tag, i) => {
				return (
					<li style={{ paddingRight: "1em", display: "inline-block" }}>
						{" "}
						{`${tag}`}{" "}
					</li>
				)
			})}
		</ul>
	</ProjectCardContainer>
)
