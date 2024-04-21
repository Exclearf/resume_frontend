import { AnimatePresence } from "framer-motion";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
const LayoutStyled = styled.div`
  grid-area: nav;
  height: 100dvh;
  font-size: 1.2rem;
  nav {
    background-color: #d7d7d7;
    height: 7dvh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    nav {
      text-align: center;
      padding: 10px 15px 10px 15px;
      justify-content: center;
      gap: 20px;
    }
  }
`;

const Layout = () => {
  return (
    <LayoutStyled>
      <nav>
        <Link to="/">About Me</Link>
        <Link to="spotify">Spotify [WIP]</Link>
        <Link to="stocks">Stocks [WIP]</Link>
        <Link to="bot">TG Bot</Link>
        <Link to="other">Others</Link>
      </nav>
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </LayoutStyled>
  );
};

export default Layout;
