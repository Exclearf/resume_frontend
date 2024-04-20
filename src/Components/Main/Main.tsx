import React from "react";
import styled from "styled-components";
import Section from "../Misc/Section";

const MainStyled = styled.div`
  height: calc(100vh - 160px);
  overflow-y: scroll;
  overflow-x: hidden;
  grid-area: main;
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

  & > div {
    padding-bottom: 40px;
    position: relative;
  }

  & > div::after {
    content: "";
    position: absolute;
    top: 45px;
    left: 0px;
    width: 73.3vw;
    height: 1px;
    background-color: #36363e;
  }

  .aboutMeSection {
    padding: 20px 0px 0px 10px;
    width: 73vw;
  }

  .experienceItem {
    padding: 20px 0px 0px 10px;
    width: 73vw;
    font-size: 1.1rem;

    & ul {
      list-style: disc;
    }

    .experienceItemPosition {
      font-weight: 500;
      font-size: 1.25rem;
      color: #36363e;
    }

    .experienceItemDuration {
      font-size: 1rem;
      color: #525255;
      padding: 0px 0px 5px 0px;
    }

    .experienceItemDescription {
      padding: 0px 0px 0px 19px;
    }

    .experienceItemDescriptionSecondLevel {
      padding: 0px 0px 0px 18px;
    }
  }
`;

function Main() {
  return (
    <MainStyled>
      <Section title="About me" fontSize={2} fontColor={"#36363e"}>
        <div className="aboutMeSection">
          Novice Full Stack developer specializing in C# and JS. <br /> Passionate
          about using new technology and constant improvement. Currently I am
          focusing on getting to know .NET in depth. My other hobbies are
          origami, cycling and ants.
        </div>
      </Section>
      <Section title="Experience" fontSize={2} fontColor={"#36363e"}>
        <div className="experienceItem">
          <div className="experienceItemPosition">
            Intern at Hexagon&#39;s Safety, Infrastructure & Geospatial division
          </div>
          <div className="experienceItemDuration">September 2023 - Present</div>
          <div className="experienceItemDescription">
            <ul>
              <li>I have worked on much more parts of the software</li>
              <li>
                I have been further participating in the commercial development
              </li>
              <li>
                Implemented and introduced facade for lodash (JavaScript
                library) in pure JS which has both removed dependency and
                improved developemnt{" "}
              </li>
              <li>Same points as below</li>
            </ul>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceItemPosition">
            Intern at Hexagon&#39;s Safety, Infrastructure & Geospatial division
          </div>
          <div className="experienceItemDuration">
            June 2023 - September 2023
          </div>
          <div className="experienceItemDescription">
            <ul>
              <li>Hand-on experience with real-life projects</li>
              <li>
                Implemented features which were later used by stakeholders
              </li>
              <li>Helped teammates whenever I could :)</li>
              <li>Created and reviewed PRs</li>
              <li>I have been:</li>
              <ul className="experienceItemDescriptionSecondLevel">
                <li>learning how development process is done</li>
                <li>Working in 2 week sprints</li>
                <li>working with C# on both front and backend</li>
                <li>
                  working with TypeScript on both bront end and mobile platforms
                </li>
                <li>
                  responsible for analyzing risks for upgrading the used
                  software
                </li>
                <li>
                  responsible for creating team-wide wiki for migration to newer
                  versions
                </li>
                <li>responsible for migration from RhodeCode to Git</li>
                <li>writing tests for features I have implemented</li>
                <li>doing pair debugging and coding</li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="experienceItem">
          <div className="experienceItemPosition">
            Preparation for an internship
          </div>
          <div className="experienceItemDuration">Summer 2022 - June 2023</div>
          <div className="experienceItemDescription">
            <ul>
              <li>Solving LeetCode</li>
              <li>Creating pet project, some of which you can find below :D</li>
              <li>
                Some of the books I have read:
                <ul className="experienceItemDescriptionSecondLevel">
                  <li>Yellow Book C# (Rob Miles)</li>
                  <li>C# in Depth (Jon Skeet)</li>
                  <li>
                    Clean Code: A Handbook of Agile Software Craftsmanship
                    (Robert C. Martin) (Robert C. Martin Series)
                  </li>
                  <li>
                    Pro C# 7: With .NET and .NET Core (Andrew Troelsen and
                    Philip Japikse)
                  </li>
                </ul>
              </li>
              <li>
                Some of the web resources I have used:
                <ul className="experienceItemDescriptionSecondLevel">
                  <li>Tim Corey course</li>
                  <li>The Microsoft .NET documentation</li>
                  <li>javascript.info (to advance in JS knowledge)</li>
                  <li>Multiple smaller YouTube guides and more...</li>
                </ul>
              </li>
              <li>And much more...</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Learning Path" fontSize={2} fontColor={"#36363e"}>
        123
      </Section>
      <Section title="Pet Projects" fontSize={2} fontColor={"#36363e"}>
        123
      </Section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </MainStyled>
  );
}

export default Main;
