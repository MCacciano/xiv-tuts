import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  background: #6140a0;
`

export const NavBrand = styled.h3`
  display: flex;
  padding: 1.25rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
`

export const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  list-style: none;
`

export const NavItem = styled.li``

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 1.25rem;
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    color: #6140a0;
    background: #fff;
  }
`
