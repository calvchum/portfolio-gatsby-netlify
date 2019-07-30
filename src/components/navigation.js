import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { NavLinksFont } from "../utilities/Fonts.js"
import { colors } from "../utilities/Colors.js"
import * as data from "../constants/pageInfo"

const ListItem = styled.li`
	font-family: "Work Sans";
	font-weight: "400";
	list-style: none;
	margin-bottom: 0em;
	margin-left: 0em;
	& a {
		color: ${colors.almostBlack};
		text-decoration: none;
		transition: 0.2s;
	}
	& a:hover {
		color: ${colors.primary};
		text-decoration: none;
	}
`

const Navigation = ({ list, internal }) => (
	<>
		{list.map((page, i) => {
			return (
				<ListItem key={i}>
					{internal ? (
						<Link to={page.link}>{page.title}</Link>
					) : (
						<a href={page.link}>{page.title}</a>
					)}
				</ListItem>
			)
		})}
	</>
)

export default Navigation
