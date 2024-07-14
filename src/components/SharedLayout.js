import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Header } from './Header/Header';
import { NavBar } from './NavBar/Navbar';
import { Logo } from './Logo/Logo';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Toaster />
        <GlobalStyle />
      </footer>
    </Layout>
  );
};
