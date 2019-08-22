import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundWrapper = styled.div`
	padding: 4em;
`
const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<NotFoundWrapper>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn't exist</p>
		</NotFoundWrapper>
	</Layout>
)

export default NotFoundPage
