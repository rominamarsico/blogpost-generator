import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { highContrastColor, lowContrastColor } from "../styles/colors";

const StCard = styled.div({
  marginTop: "3rem",
  padding: "2rem",
  backgroundColor: lowContrastColor,
  color: highContrastColor,
  border: `1px solid ${lowContrastColor}`,
  borderRadius: "5px",
});

const StDescription = styled.div({
  marginBottom: "1rem",
});

const StLink = styled(Link)({
  paddingBottom: "1.5rem",
  display: "block",
});

type CardData = {
  title: string;
  slug: string;
  description: string;
};

type CardProps = {
  data: CardData;
};

export const Card = ({ data }: CardProps) => {
  return (
    <StCard>
      <h1>{data.title}</h1>
      <StDescription>{data.description}</StDescription>
      <StLink to={data.slug}>Continue reading</StLink>
    </StCard>
  );
};
