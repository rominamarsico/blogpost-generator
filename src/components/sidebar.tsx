import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "@emotion/styled";
import { fontColor, highlightColor } from "../styles/colors";

const StSidebar = {
  height: "100%",
  width: "20rem",
};

const StLinks = styled(Link)({
  color: fontColor,
});

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

  function getSidebarLinks() {
    return data.allMdx.nodes.map((entry: Data) => {
      const { title, slug } = entry.frontmatter;

      const isCurrentPath = location.pathname === slug + "/";

      return (
        <p>
          <StLinks
            to={slug}
            style={{ color: isCurrentPath ? highlightColor : fontColor }}
          >
            {title}
          </StLinks>
        </p>
      );
    });
  }

  const sidebarLinks = getSidebarLinks();

  return (
    <div style={StSidebar}>
      <h1>About</h1>
      <div>{sidebarLinks}</div>
    </div>
  );
};
