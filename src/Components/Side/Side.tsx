import React from "react";
import styled from "styled-components";
import Section from "../Misc/Section";
import { EmailIcon, PhoneIcon, PinIcon } from "../Misc/Icons";

const SideStyled = styled.div`
  grid-area: side;
  background-color: #d7d7d7;
  font-size: 1.25rem;
  color: #525255;
  position: relative;
  padding: 80px 0px 0px 1.5vw;

  & a{
    text-decoration: underline;
    transition: all 200ms linear;
  }

  & a:hover{
    color: #6f6f80;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100px;
    border-top: solid 60px #36363e;
    border-left: solid calc(0.5 * 2 / 9 * 100vw) transparent;
    border-right: solid calc(0.5 * 2 / 9 * 100vw) transparent;
  }

  .detailsEntry {
    display: flex;
    align-items: center;
  }

  .educationSection {
    position: relative;
    padding-left: 20px;
  }

  .educationSection::after {
    content: "";
    position: absolute;
    top: 5%;
    left: 0.23rem;
    width: 0.15rem;
    height: 85%;
    background-color: #36363e;
  }
  .educationSection::before {
    content: "";
    position: absolute;
    bottom: 7%;
    left: calc(0.23rem / 2 - 0.07rem);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #36363e;
  }

  .eduName {
    color: #36363e;
  }

  & > div {
    padding: 0px 0px 30px 0px;
  }
`;

function Side() {
  return (
    <SideStyled>
      <Section title={"Contact Details"} fontSize={2} fontColor={"#36363e"}>
        <div className={"detailsEntry"}>
          <EmailIcon />
          <a href="mailto:nboholii@gmail.com">nboholii@gmail.com</a>
        </div>
        <div className={"detailsEntry"}>
          <PhoneIcon />
          <a href="tel:+48 511 266 544">+48 511 266 544</a>
        </div>
        <div className={"detailsEntry"}>
          <PinIcon />
          <a href="https://www.google.com/maps/place/%C5%81%C3%B3d%C5%BA/" target="blank">
            Łódź, Polska
          </a>
        </div>
      </Section>
      <Section title={"Education"} fontSize={2} fontColor={"#36363e"}>
        <div className="educationSection">
          <div className="eduName" style={{ color: "#36363e !important" }}>
            Bachelor of Science in
            <br />
            Computer Science
          </div>
          <div className="eduDetails">
            Uniwersytet Łódzki,
            <br />
            Łódź
            <br />
            2022 - Now
          </div>
        </div>
      </Section>
      <Section title={"Skills"} fontSize={2} fontColor={"#36363e"}>
        <div>HTML/CSS</div>
        <div>JS</div>
        <div>React</div>
        <div>C# .NET</div>
        <div>ASP.NET Core</div>
        <div>Entity Framework</div>
        <div>C# Web API</div>
      </Section>
    </SideStyled>
  );
}

export default Side;
