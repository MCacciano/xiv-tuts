import PropTypes from "prop-types"
import React from "react"

// styled components
import { HeaderStyled, NavBrand, Nav, NavItem, NavLink } from "./header.styles"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <NavBrand>XIV | TUTS</NavBrand>
    <Nav>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/tutorials">Tuts</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/search">Search</NavLink>
      </NavItem>
    </Nav>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
