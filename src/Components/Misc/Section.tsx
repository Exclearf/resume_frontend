import React from "react";
import styled from "styled-components";
import Title, { TitleProps } from "./Title";

interface SectionProps {
  title: string;
  fontSize?: 2;
  fontColor?: string;
  children: any;
  className?: string
}

const SectionStyled = styled.div`
  @media only screen and (max-width: 600px) {
  }
`;

const Section: React.FC<SectionProps> = ({
  title,
  fontSize,
  fontColor,
  children,
  className
}) => {
  return (
    <SectionStyled className={className}>
      {fontColor ? (
        <Title text={title} fontSize={fontSize} fontColor={fontColor} />
      ) : (
        <Title text={title} fontSize={fontSize} />
      )}
      <div className="secChildren">{children}</div>
    </SectionStyled>
  );
};

Section.defaultProps = {
  title: "",
  fontSize: 2,
  fontColor: "",
  children: null,
};

export default Section;
