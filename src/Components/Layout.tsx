import { AnimatePresence } from "framer-motion";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
const LayoutStyled = styled.div`
  grid-area: nav;
  background-color: #d7d7d7;
  height: 100%;
  font-size: 1.2rem;
  nav {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    nav{
        height: 10vh;
        text-align: center;
        padding: 0px 10px 0px 10px;
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
