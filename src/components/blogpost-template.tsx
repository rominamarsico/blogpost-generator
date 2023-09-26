import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import "../global.css";
import { PageWrapper } from "./page-wrapper";
import { getTitleFromHierarchy } from "../utils/util-functions";

const shortcodes = { Link }; // Provide common components here

type PageLayoutProps = {
  data: any;
  children: React.ReactNode;
};

export default function BlogpostTemplate({ data, children }: PageLayoutProps) {
  const fullTitle = data.mdx.frontmatter.title;
  const title = getTitleFromHierarchy(fullTitle);

  return (
    <PageWrapper>
      <h1>{title}</h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </PageWrapper>
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
