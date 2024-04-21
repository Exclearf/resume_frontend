import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Side from "./Components/Side/Side";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Project1 from "./pages/Project1";

const ContainerStyled = styled.div`
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  display: grid;
  grid-template: 160px 60px 1fr / 2fr 7fr;
  grid-template-areas:
    "header header"
    "side nav"
    "side main";
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    grid-template: 20vh 80vh 10vh 90vh / 1fr;
    grid-template-areas:
      "header"
      "side"
      "nav"
      "main";
  }
`;

function Container() {
  return (
    <ContainerStyled className="App">
      <Header />
      <Side />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="spotify" element={<Project1 />} />
            <Route path="trading" element={<Project1 />} />
            <Route path="bot" element={<Project1 />} />
            <Route path="other" element={<Project1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContainerStyled>
  );
}

export default Container;
