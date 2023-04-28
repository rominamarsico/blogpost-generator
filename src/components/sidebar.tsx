import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "@emotion/styled";
import { highlightColor, primaryColor } from "../styles/colors";
import { useLocation } from "@reach/router";

const StSidebar = styled.div({
  height: "100%",
  width: "20rem",
});

const StLinkWrapper = styled.div((props: LinkProps) => ({
  padding: "1rem 0 1rem 1rem",
  background: props.isCurrentPath
    ? `linear-gradient(90deg, ${highlightColor} 0%, ${primaryColor} 100%)`
    : "",
}));

const StLink = styled(Link)({
  textDecoration: "none",
});

const StSidebarTitle = styled.h1({
  paddingLeft: "1rem",
});

type LinkProps = {
  isCurrentPath: boolean;
};

type Data = {
  frontmatter: {
    title: string;
    slug: string;
  };
};

export const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  const location = useLocation();

  function getSidebarLinks() {
    return data.allMdx.nodes.map((entry: Data) => {
      const { title, slug } = entry.frontmatter;

      const isCurrentPath = location.pathname === slug + "/";

      return (
        <StLinkWrapper isCurrentPath={isCurrentPath}>
          <StLink to={slug}>{title}</StLink>
        </StLinkWrapper>
      );
    });
  }

  const sidebarLinks = getSidebarLinks();

  return (
    <StSidebar>
      <StLinkWrapper isCurrentPath={location.pathname === "/"}>
        <StLink to={"/"}>
          <h1>Home</h1>
        </StLink>
      </StLinkWrapper>
      <StSidebarTitle>About</StSidebarTitle>
      <StSidebarTitle>Posts</StSidebarTitle>
      <div>{sidebarLinks}</div>
    </StSidebar>
  );
};
