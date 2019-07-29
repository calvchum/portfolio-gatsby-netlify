import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { NavLinksFont } from "../utilities"

const ListItem = styled.li`
	${NavLinksFont}
	list-style: none;
	margin-bottom: 0em;
	margin-left: 0em;
	& a {
		color: red;
		text-decoration: none;
		transition: 0.2s;
	}
	& a:hover {
		color: orange;
		text-decoration: none;
	}
`

const Navigation = ({ props }) => <></>
