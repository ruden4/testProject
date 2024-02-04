import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
`;

const NavigationList = styled.ul`
display: flex;
gap: 50px
`;

const NavigationItem = styled.li`
`;

const StyledLink = styled(NavLink)`
  padding: 20px 0;
  color: black;
  font-size: 18px;
  border-bottom: 3px solid transparent;
  transition-duration: 300ms;

  &.active {
    border-bottom: 3px solid #3470ff;
    font-weight: 700;
  }
`;

export {Nav, NavigationList, NavigationItem, StyledLink}
