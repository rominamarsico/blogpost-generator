import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { Sidebar } from "./sidebar";
import "../global.css";
import { bgColor, fontColor } from "../styles/colors";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const StPageLayout = styled.div({
  height: "100vh",
  padding: "2rem",
  display: "grid",
  gridTemplateColumns: "20rem 5rem 1fr",
  gridTemplateRows: "5rem 1fr 5rem",
  gridTemplateAreas: `
    'header header header'
    'sidebar . main'
    'footer footer footer'
 `,
  backgroundColor: bgColor,
  color: fontColor,
  fontFamily: "sans-serif",
});

const StHeader = styled.div({
  gridArea: "header",
  display: "flex",
  justifyContent: "center",
});

const StSidebar = styled(Sidebar)({
  gridArea: "sidebar",
});

const StMain = styled.div({
  gridArea: "main",
});

const StFooter = styled.div({
  gridArea: "footer",
  display: "flex",
  justifyContent: "center",
});

const shortcodes = { Link }; // Provide common components here

type PageLayoutProps = {
  data: any;
  children: React.ReactNode;
};

export default function PageTemplate({ data, children }: PageLayoutProps) {
  useEffect(() => {
    deckDeckGoHighlightElement();
  }, []);

  return (
    <StPageLayout>
      <StHeader>
        <h1>Blog by Ramdadam</h1>
      </StHeader>
      <StSidebar />
      <StMain>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </StMain>
      <StFooter>
        Made with ❤ by Romina Marsico & Gatsby. Hosted with cloudfare pages
      </StFooter>
    </StPageLayout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
