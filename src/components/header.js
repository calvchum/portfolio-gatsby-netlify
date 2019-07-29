import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import animatedLogo from "../images/animatedLogo.svg"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: grid;
  grid: 120px / 1fr 1fr;
  align-items: center;
  padding: 0em 3em;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background: white;
  z-index: 1;
`

const LogoWrapper = styled.img`
  height: 100px;
  margin-bottom: 0em;
  display: flex;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <LogoWrapper src={logo} alt="C logo" />
    </Link>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
