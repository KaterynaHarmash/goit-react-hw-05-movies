import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  height: 100%;
  align-items: center;
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  transition: all 0.5s ease-in-out;
  position: relative;
  text-transform: uppercase;
  height: 100%;
  padding: auto 0;
  display: flex;
  align-items: center;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 0;
    height: 5px;
    background: #e74c3c;
    transition: all 0.5s ease-in-out;
  }
  &:hover,
  &.active {
    color: #e74c3c;
    &::after {
      width: 100%;
    }
  }
`;
