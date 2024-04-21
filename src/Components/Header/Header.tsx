import React from "react";
import styled from "styled-components";
import Title from "../Misc/Title";

const HeaderStyled = styled.div`
  grid-area: header;
  background-color: #36363e;
  display: flex;
  align-items: center;
  padding-left: 24.2vw;

  .floatLeft {
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 0;
    justify-content: center;
    height: 20vh;

    .floatLeft{
      justify-content: center;
      align-items: center;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="floatLeft">
        <Title fontSize={3} text="Nazar Boholii" isUnderlined={true} />
        <Title fontSize={2} text=".NET Full Stack" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
