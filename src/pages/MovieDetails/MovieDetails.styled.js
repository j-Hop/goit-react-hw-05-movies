import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 20px;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  display: block;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;

export const DetailsTitle = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  display: block;
  max-width: 80%;
  margin-bottom: 15px;
  text-align: justify;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const NavItem = styled.li`
  margin-right: 15px;
  text-align: center;
`;

export const NavLinkStyl = styled(NavLink)`
  position: relative;
  display: block;

  font-weight: 500;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #33c4ac;

  border: solid 1px #33c4ac;
  border-radius: 4px;
  padding: 0 10px;
  text-align: justify;
  justify-content: baseline;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2ca08c;
  }

  &.current {
    color: #2ca08c;
  }
`;