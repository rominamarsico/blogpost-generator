import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { highContrastColor, lowContrastColor } from "../styles/colors";
import { getTitleFromHierarchy } from "../utils/util-functions";
import { IBlogpost } from "../model/blogpost";

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

const StDate = styled.div({
  fontStyle: "italic",
  color: "grey",
  paddingBottom: "1rem",
});

interface ICardProps {
  data: IBlogpost;
  children?: React.ReactNode;
}

export const Card = ({ data, children }: ICardProps) => {
  const fullTitle = data.title;
  const title = getTitleFromHierarchy(fullTitle);

  return (
    <StCard>
      <h1>{title}</h1>
      <StDate>{data.date}</StDate>
      {data.updated && <StDate>Last updated: {data.updated}</StDate>}
      <StDescription>{data.description}</StDescription>
      <StLink to={data.slug}>Continue reading</StLink>
      {children}
    </StCard>
  );
};
