import React from "react";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

const OtherProjectStyled = styled.div`
  height: calc(100dvh - 180px);
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  grid-area: main;
  position: relative;
  padding: 75px 0px 0px 2vw;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #36363e;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .screenChangeDiv {
    position: absolute;
    width: 100%;
    height: 101%;
    background-color: #d7d7d7;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .screenChangeDiv::after {
    background-color: transparent;
  }

  @media only screen and (max-width: 600px) {
    height: 90dvh;
    padding: 50px 25px 50px 25px;

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #d7d7d7;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #9f9f9f;
    }

    & > div > div:first-child {
      text-align: center;
    }
    & > div::after {
      content: "";
      position: absolute;
      top: 45px;
      left: 0px;
      width: 100%;
      height: 1px;
      background-color: #36363e;
    }
  }
`;

const OtherProject = () => {
  const isPresent = useIsPresent();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <OtherProjectStyled>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.7, ease: "circInOut" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="screenChangeDiv"
      />
      OtherProject
    </OtherProjectStyled>
  );
};

export default OtherProject;
