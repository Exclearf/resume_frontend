import React from "react";
import styled from "styled-components";

export interface TitleProps {
  text: string;
  fontSize?: number;
  isUnderlined?: boolean;
  fontColor?: string;
}

interface TitleStyledProps {
  fontSize?: number;
  isUnderlined: boolean;
  fontColor?: string;
}

const TitleStyled = styled.div<TitleStyledProps>`
  font-size: ${(props) => props.fontSize + "rem"};
  color: ${(props) => props.fontColor};
  border-bottom: ${(props) =>
    props.isUnderlined ? "2px rgba(253, 255, 252, 0.5) solid;" : "none"};
`;

const Title: React.FC<TitleProps> = ({
  text,
  fontSize,
  fontColor,
  isUnderlined,
}) => {
  return (
    <TitleStyled
      fontSize={fontSize}
      isUnderlined={isUnderlined as boolean}
      fontColor={fontColor}
    >
      {text}
    </TitleStyled>
  );
};

Title.defaultProps = {
  text: "",
  fontSize: 2,
  isUnderlined: false,
  fontColor: "#fdfffc",
};

export default Title;
