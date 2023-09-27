import React, { useEffect, useState } from "react";
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

const StCategory = styled.h3({
  padding: "3rem 0 0 1rem",
  fontStyle: "italic",
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

type IPost = {
  title: string;
  slug: string;
};

type ISidebar = {
  postCategory: string;
  posts: IPost[];
};

export const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  const location = useLocation();

  const [sidebarHierarchy, setSidebarHierarchy] = useState<ISidebar[]>([]);

  useEffect(() => {
    getSidebarHierarchy();
  }, []);

  function getSidebarHierarchy() {
    const hierarchy: ISidebar[] = [];
    let postTitle = "";
    let category = "";

    return data.allMdx.nodes.map((blogPost: Data) => {
      const { title, slug } = blogPost.frontmatter;
      const getTitleHierarchy = title.split("/");
      const postHasCategory = getTitleHierarchy.length > 1;

      if (postHasCategory) {
        postTitle = getTitleHierarchy[getTitleHierarchy.length - 1];
        category = getTitleHierarchy[0];
      } else {
        postTitle = title;
        category = "aaa_unsorted";
      }

      if (hierarchy.length === 0) {
        hierarchy.push({
          postCategory: category,
          posts: [{ title: postTitle, slug: slug }],
        });
      } else {
        let categoryExists = false;

        hierarchy.forEach((entry) => {
          if (entry.postCategory === category) {
            entry.posts.push({ title: postTitle, slug: slug });
            categoryExists = true;
          }
        });

        if (!categoryExists) {
          hierarchy.push({
            postCategory: category,
            posts: [{ title: postTitle, slug: slug }],
          });
        }
      }

      setSidebarHierarchy(hierarchy);
    });
  }

  function getSidebar() {
    return sidebarHierarchy.map((sidebarEntry, index) => {
      return (
        <div key={index}>
          <StCategory>
            {sidebarEntry.postCategory !== "aaa_unsorted" &&
              sidebarEntry.postCategory}
          </StCategory>
          <div>
            {sidebarEntry.posts.map((post, index) => {
              const isCurrentPath = location.pathname === post.slug + "/";
              return (
                <StLinkWrapper key={index} isCurrentPath={isCurrentPath}>
                  <StLink to={post.slug}>{post.title}</StLink>
                </StLinkWrapper>
              );
            })}
          </div>
        </div>
      );
    });
  }

  const sidebarLinks = getSidebar();

  return (
    <StSidebar>
      <StLinkWrapper isCurrentPath={location.pathname === "/"}>
        <StLink to={"/"}>
          <h3>Home</h3>
        </StLink>
      </StLinkWrapper>

      <StLinkWrapper isCurrentPath={location.pathname === "/about/"}>
        <StLink to={"/about"}>
          <h3>About me</h3>
        </StLink>
      </StLinkWrapper>

      <div>{sidebarLinks}</div>
    </StSidebar>
  );
};
