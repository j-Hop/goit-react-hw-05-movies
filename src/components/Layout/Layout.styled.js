import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NavItem = styled.li`
  padding: 15px;
  text-align: center;
`;

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: block;

  font-weight: 500;
  font-size: 40px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #33c4ac;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2ca08c;
  }

  &.current {
    color: #2ca08c;
  }

  /* &.current::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 4px;
    background: #2ca08c;
    border-radius: 2px; */
  /* } */
`;