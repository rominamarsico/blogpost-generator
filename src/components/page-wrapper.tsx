import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Sidebar } from "./sidebar";
import "../global.css";
import { primaryColor, highContrastColor } from "../styles/colors";

const StPageLayout = styled.div({
  height: "100vh",
  paddingRight: "2rem",
  display: "grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "5rem auto-fill 1rem 5rem",
  gridTemplateAreas: `
    'header title'
    'sidebar main'
    '. .'
    '. footer'
 `,
  backgroundColor: primaryColor,
  color: highContrastColor,
  fontFamily: "sans-serif",
});

const StHeader = styled.div({
  gridArea: "title",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
});

const StSidebar = styled(Sidebar)<IMenuProps>`
  grid-area: sidebar;
`;

const StMain = styled.div({
  gridArea: "main",
  marginTop: "3rem",
});

const StFooter = styled.div({
  gridArea: "footer",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "1rem 0",
});

const StMenuButtonWrapper = styled.div({
  gridArea: "header",
  display: "flex",
  alignItems: "center",
});

const StMenuButton = styled.button({
  all: "unset",
  height: "1rem",
  padding: "1rem",
});

type IMenuProps = {
  showSidebar: boolean;
};

const StBurgerMenuTop = styled.div<IMenuProps>`
  border-top: 1px solid white;
  transform: ${(props) => (props.showSidebar ? "rotate(45deg)" : "")};
  width: ${(props) => (props.showSidebar ? "1.5rem" : "2rem")};
  transform-origin: left;
  transition-duration: 1s;
`;

const StBurgerMenuBottom = styled.div<IMenuProps>`
  border-bottom: 1px solid white;
  transform: ${(props) => (props.showSidebar ? "rotate(-45deg)" : "")};
  width: ${(props) => (props.showSidebar ? "1.5rem" : "2rem")};
  transform-origin: left;
  transition-duration: 1s;
`;

const StPlaceholder = styled.div({
  height: "1rem",
});

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageLayoutProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const showSidebarOnReload = windowWidth >= 1200;
    setShowSidebar(showSidebarOnReload);
  }, []);

  function toggleSidebar() {
    setShowSidebar((prevState) => !prevState);
  }

  return (
    <StPageLayout>
      <StHeader>
        <h1>Blog by Ramdadam</h1>
      </StHeader>
      <StMenuButtonWrapper>
        <StMenuButton onClick={toggleSidebar}>
          <StBurgerMenuTop showSidebar={showSidebar} />
          <StPlaceholder />
          <StBurgerMenuBottom showSidebar={showSidebar} />
        </StMenuButton>
      </StMenuButtonWrapper>
      {showSidebar && <StSidebar showSidebar={showSidebar} />}
      <StMain>{children}</StMain>
      <StFooter>
        Made with ❤ by Romina Marsico & Gatsby. Hosted with cloudfare pages
      </StFooter>
    </StPageLayout>
  );
};
