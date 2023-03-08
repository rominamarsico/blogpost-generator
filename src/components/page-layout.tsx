import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import "../global.css";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { PageLayoutDesign } from "./page-layout-design";

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
    <PageLayoutDesign>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </PageLayoutDesign>
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
