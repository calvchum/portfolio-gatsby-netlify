import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/cLogoAnimation9.svg"
import Navigation from "./navigation"
import styled from "styled-components"
import { SubheaderText, media, colors } from "../utilities"
import * as data from "../constants/pageInfo"

const HeaderWrapper = styled.div`
  display: grid;
  grid: 120px / 1fr 1fr;
  align-items: center;
  padding: 0.5em 2em;

  background: white;
  z-index: 1;
`

const LogoWrapper = styled.img`
  height: 100px;
  margin-bottom: 0em;
  display: flex;
`
const HeaderNavWrapper = styled.ul`
  display: grid;
  grid: 120px / repeat(4, auto);
  grid-gap: 1em;
  margin: 0em;
  justify-content: flex-end;
  align-items: center;
  ${media.small`
    font-size: 0.9em
  `}
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <LogoWrapper src={logo} alt="C logo" />
    </Link>
    <HeaderNavWrapper>
      <Navigation list={data.pageData} internal={true} />
    </HeaderNavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
