import React from "react";
import styled from "@emotion/styled";
import { Sidebar } from "./sidebar";
import "../global.css";
import { primaryColor, highContrastColor } from "../styles/colors";

const StPageLayout = styled.div({
  height: "100vh",
  padding: "2rem",
  paddingLeft: "0",
  display: "grid",
  gridTemplateColumns: "20rem 5rem 1fr",
  gridTemplateRows: "5rem 1fr 5rem",
  gridTemplateAreas: `
    'header header title'
    'sidebar . main'
    '. . .'
    '. . footer'
 `,
  backgroundColor: primaryColor,
  color: highContrastColor,
  fontFamily: "sans-serif",
});

const StHeader = styled.div({
  gridArea: "title",
  display: "flex",
  justifyContent: "start",
});

const StSidebar = styled(Sidebar)({
  gridArea: "sidebar",
});

const StMain = styled.div({
  gridArea: "main",
  marginTop: "3rem",
});

const StFooter = styled.div({
  gridArea: "footer",
  display: "flex",
  justifyContent: "start",
});

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayoutDesign = ({ children }: PageLayoutProps) => {
  return (
    <StPageLayout>
      <StHeader>
        <h1>Blog by Ramdadam</h1>
      </StHeader>
      <StSidebar />
      <StMain>{children}</StMain>
      <StFooter>
        Made with ❤ by Romina Marsico & Gatsby. Hosted with cloudfare pages
      </StFooter>
    </StPageLayout>
  );
};
