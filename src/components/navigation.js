import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { NavLinksFont } from "../utilities/Fonts.js"
import * as data from "../constants/pageInfo"

const ListItem = styled.li`
	fontfamily: "Work Sans";
	fontweight: "400";
	list-style: none;
	margin-bottom: 0em;
	margin-left: 0em;
	& a {
		color: black;
		text-decoration: none;
		transition: 0.2s;
	}
	& a:hover {
		color: orange;
		text-decoration: none;
	}
`

const Navigation = ({ props }) => (
	<>
		{data.pageData.map((page, i) => {
			return (
				<ListItem>
					<Link to={page.link}>{page.title}</Link>
				</ListItem>
			)
		})}
	</>
)

export default Navigation
