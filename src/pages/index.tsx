import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Home } from "./home";

const IndexPage: React.FC<PageProps> = () => {
  return <Home />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
