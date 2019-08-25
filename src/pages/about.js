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

const AboutPageHeading = styled(SubheaderText)`
	color: ${colors.almostBlack};
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
			<AboutPageHeading>My journey so far</AboutPageHeading>
			<Timeline lineColor={"#ddd"}>
				<TimelineItem
					key="001"
					dateText="12/2018 - present"
					style={{ color: "#e86971" }}
				>
					{" "}
					<TimeLineHeading>Continuing the coding journey</TimeLineHeading>
					<TimeLineSubHeading>
						Achieving mastery by constant practice
					</TimeLineSubHeading>
					<br />
					<TimeLineBody>
						After the bootcamp, I was hooked. I wanted to keep learning the
						latest front-end technologies and the best way to do that was by
						continuing to dabble in different projects.
					</TimeLineBody>
					<br />
					<TimeLineBody>
						I was fortunate enough to meet my business partner Ben who founded
						Darkgreen Designs with me. Deciding to work with him was a great
						choice - he was a fellow journeyman on the path of mastery.
					</TimeLineBody>
				</TimelineItem>
				<TimelineItem
					key="002"
					dateText="06/2018 - 08/2018"
					dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
					bodyContainerStyle={{
						background: "#ddd",
						padding: "20px",
						borderRadius: "8px",
						boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
					}}
				>
					<TimeLineHeading>Learning to code</TimeLineHeading>
					<TimeLineSubHeading>Le Wagon bootcamp in 2018</TimeLineSubHeading>
					<br />
					<TimeLineBody>
						Probably the hardest thing I've ever done. I sold my businesses so I
						could keep learning new skills to create bigger visions in to
						reality. That lead me to learn how to code
					</TimeLineBody>
					<br />
					<TimeLineBody>
						It was an intensive curriculum that challenged me mentally but also
						psychologically. I didn't know if I could do it, or if I was cut out
						for this career. However, I persevered and learned a valuable lesson
						- grit is the most important thing to success in any field.
					</TimeLineBody>
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
							06/2017 – 05/2018
						</div>
					}
				>
					<TimeLineHeading>Starting a business</TimeLineHeading>
					<TimeLineSubHeading>the king of popcorn</TimeLineSubHeading>
					<br />
					<TimeLineBody>
						It started out as just a work of passion. I missed the sweet and
						salty popcorn that I had while travelling to the States, so I set
						about recreating that flavour at home. Turns out other people loved
						my popcorn too, and were willing to pay for it.
					</TimeLineBody>
					<br />
					<TimeLineBody>
						So I got my tools out and started scaling up my business. It was a
						journey in its own right and deserves its own blog post. It was at
						this stage of the journey that I discovered my love for business and
						creating things with my own hands.
					</TimeLineBody>
				</TimelineItem>
				<TimelineItem
					key="004"
					dateText="12/2014 – 08/2017"
					dateInnerStyle={{ background: `${colors.secondary}` }}
				>
					{" "}
					<TimeLineHeading>Finance career</TimeLineHeading>
					<TimeLineSubHeading>working the 9-5</TimeLineSubHeading>
					<br />
					<TimeLineBody>
						Straight out of University, and I landed a pretty good graduate job.
						Learned the ropes of what it takes to work in a big organisation.
						Worked on some pretty big picture stuff with accounts with a lot of
						zeros in it.
					</TimeLineBody>
					<br />
					<TimeLineBody>
						Stable career, but I soon realised I wanted to take some risks, to
						make some mistakes. However, I learned that I loved writing macros
						to crunch through large data-sets.
					</TimeLineBody>
				</TimelineItem>
			</Timeline>
		</MainWrapper>
	</Layout>
)

export default IndexPage
