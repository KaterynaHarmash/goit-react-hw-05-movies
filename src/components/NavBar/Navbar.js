import { NavItem, NavList, StyledNavBar, StyledNavLink } from './Navbar.styled';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavItem>
      </NavList>
    </StyledNavBar>
  );
};
