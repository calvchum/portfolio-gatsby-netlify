import Typography from "typography"
import styled from "styled-components"

const typography = new Typography({
	baseFonySize: "16px",
	bodyFontFamily: ["Work Sans", "sans-serif"],
	headerFontFamily: ["Work Sans", "sans-serif"],
	googleFonts: [
		{
			name: "Work Sans",
			styles: ["400", "500"],
		},
	],
})

// typography setup objects

export const fontsize = {
	hero: "2.67em",
	h1: "2em",
	subheader: "1.3em",
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

export default typography
