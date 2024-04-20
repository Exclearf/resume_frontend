import React from "react";
import styled from "styled-components";
import Title, { TitleProps } from "./Title";

interface SectionProps {
  title: string;
  fontSize?: 2;
  fontColor?: string;
  children: any;
}

const SectionStyled = styled.div``;

const Section: React.FC<SectionProps> = ({
  title,
  fontSize,
  fontColor,
  children,
}) => {
  return (
    <SectionStyled>
      {fontColor ? (
        <Title text={title} fontSize={fontSize} fontColor={fontColor} />
      ) : (
        <Title text={title} fontSize={fontSize} />
      )}

      {children}
    </SectionStyled>
  );
};

Section.defaultProps = {
  title: "",
  fontSize: 2,
  fontColor: "",
  children: null
};

export default Section;
