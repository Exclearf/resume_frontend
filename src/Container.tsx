import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Side from "./Components/Side/Side";
import Main from "./Components/Main/Main";

const ContainerStyled = styled.div`
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  display: grid;
  grid-template: 160px 1fr / 2fr 7fr;
  grid-template-areas:
    "header header"
    "side main";
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

function Container() {
  return (
    <ContainerStyled className="App">
      <Header />
      <Side />
      <Main />
    </ContainerStyled>
  );
}

export default Container;
