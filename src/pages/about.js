import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { colors, SubheaderText, BodyText } from "../utilities"
import { HeroBanner } from "../components/herobanner"
import { BannerLinks } from "../components/bannerlinks"
import { Midsection } from "../components/midsection"
import { AdditionalWork } from "../components/additionalwork"
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react"

const AccentText = styled(SubheaderText)`
	color: ${colors.primary};
`
const MainWrapper = styled.div`
	padding: 3em;
`

const TimeLineHeading = styled(SubheaderText)`
	font-size: 1.5em;
	color: ${colors.almostBlack};
`
const TimeLineSubHeading = styled(SubheaderText)`
	font-size: 1em;
	color: ${colors.almostBlack};
`

const TimeLineBody = styled(BodyText)`
	font-size: 0.8em;
	color: ${colors.almostBlack};
`

const IndexPage = () => (
	<Layout>
		<SEO title="About" />
		<MainWrapper>
			<SubheaderText>Who Am I?</SubheaderText>
			<Timeline lineColor={"#ddd"}>
				<TimelineItem
					key="001"
					dateText="2014 - 2017"
					style={{ color: "#e86971" }}
				>
					<TimeLineHeading>Finance career</TimeLineHeading>
					<TimeLineSubHeading>working the 9-5</TimeLineSubHeading>
					<br />
					<TimeLineBody>
						Straight out of University, and I landed a pretty good graduate job.
						Learned the ropes of what it takes to work in a big organisation.
						Worked on some pretty big picture stuff with big accounts. Realised
						it wasn't for me. I needed to get some real world experience.
					</TimeLineBody>
				</TimelineItem>
				<TimelineItem
					key="002"
					dateText="04/2009 – 11/2010"
					dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
					bodyContainerStyle={{
						background: "#ddd",
						padding: "20px",
						borderRadius: "8px",
						boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
					}}
				>
					<h3 style={{ color: "#61b8ff" }}>Title, Company</h3>
					<h4 style={{ color: "#61b8ff" }}>Subtitle</h4>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
				</TimelineItem>
				<TimelineItem
					key="003"
					dateComponent={
						<div
							style={{
								display: "block",
								float: "left",
								padding: "10px",
								background: "rgb(150, 150, 150)",
								color: "#fff",
							}}
						>
							11/2008 – 04/2009
						</div>
					}
				>
					<h3>Title, Company</h3>
					<h4>Subtitle</h4>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
				</TimelineItem>
				<TimelineItem
					key="004"
					dateText="08/2008 – 11/2008"
					dateInnerStyle={{ background: "#76bb7f" }}
				>
					<h3>Title, Company</h3>
					<h4>Subtitle</h4>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
					<p>
						Est incididunt sint eu minim dolore mollit velit velit commodo ex
						nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
						magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
						irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
						qui duis Lorem est.
					</p>
				</TimelineItem>
			</Timeline>
		</MainWrapper>
	</Layout>
)

export default IndexPage
