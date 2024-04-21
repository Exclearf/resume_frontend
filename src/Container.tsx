import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Side from "./Components/Side/Side";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import SpotifyProject from "./pages/SpotifyProject";
import StocksProject from "./pages/StocksProject";
import BotProject from "./pages/BotProject";
import OtherProject from "./pages/OtherProject";

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
  min-height: 100dvh;
  width: 100vw;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    grid-template: 20dvh 80dvh 10dvh 90dvh / 1fr;
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
            <Route path="spotify" element={<SpotifyProject />} />
            <Route path="stocks" element={<StocksProject />} />
            <Route path="bot" element={<BotProject />} />
            <Route path="other" element={<OtherProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContainerStyled>
  );
}

export default Container;
