import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, NavLinkStyled, NavStyled } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <NavStyled>
          <NavItem>
            <NavLinkStyled to="/">HOME</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/movies">MOVIE</NavLinkStyled>
          </NavItem>
        </NavStyled>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;