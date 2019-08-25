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
			<h1>Page not found...</h1>
			<p>This feature is still under construction</p>
		</NotFoundWrapper>
	</Layout>
)

export default NotFoundPage
