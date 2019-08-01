import Typography from "typography"
import styled from "styled-components"

const typography = new Typography({
	baseFonySize: "16px",
	bodyFontFamily: ["Work Sans", "sans-serif"],
	headerFontFamily: ["Work Sans", "sans-serif"],
	googleFonts: [
		{
			name: "Work Sans",
			styles: ["200", "300", "400", "500"],
		},
	],
})

// typography setup objects

export const fontsize = {
	hero: "2.67em",
	h1: "2em",
	subheader: "2em",
	body: "1em",
}

export const HeaderBaselines = {
	margin: "0.4em 0em",
	fontFamily: "Work Sans",
	fontWeight: "500",
}

export const NavLinksFont = {
	fontFamily: "Work Sans",
	fontWeight: "400",
}

// typography styled components

export const HeaderText = styled.h1`
	${HeaderBaselines}
	font-size: ${fontsize.h1};
	line-height: 140%;
`

export const SubheaderText = styled.h2`
	${HeaderBaselines}
	margin-bottom: 1.5em;
	font-size: ${fontsize.subheader};
	font-weight: 200;
	line-heart: 140%;
`

export const BodyText = styled.p`
	font-size: ${fontsize.body};
	margin: 0em;
	font-family: "Work Sans";
	font-weight: 300;
`

export default typography
