import React from "react"
import styled from "styled-components"
import { SubheaderText, media, colors } from "../utilities"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import * as data1 from "../constants/projectInfo"
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
// return (
// 	<ProjectLink to={project.link} key={i}>
// 		<ProjectCard project={project} />
// 	</ProjectLink>
// )

export const AdditionalWork = () => {
	return (
		<StaticQuery
			query={graphql`
				query ProjectQuery {
					allMarkdownRemark {
						edges {
							node {
								frontmatter {
									date
									path
									tags
									title
									organisation
								}
							}
						}
					}
				}
			`}
			render={data => (
				<AdditionalWorkWrapper>
					<ProjectTitle>Additional Work</ProjectTitle>
					{console.log(data.allMarkdownRemark.edges)}
					{data.allMarkdownRemark.edges.map((edge, i) => {
						console.log(edge.node.frontmatter.title)
						return (
							<ProjectLink to={edge.node.frontmatter.path}>
								<ProjectCard project={edge.node.frontmatter} />
							</ProjectLink>
						)
					})}
				</AdditionalWorkWrapper>
			)}
		/>
	)
}
