import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PageLayoutDesign } from "../components/page-layout-design";
import { Card } from "../components/card";

type PostData = {
  title: string;
  slug: string;
  description: string;
};

type Card = {
  frontmatter: PostData;
};

export const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            description
          }
        }
      }
    }
  `);

  const welcoming = (
    <div>
      Hi and welcome to my personal blog, where I collect my learnings in tech
      throughout the years. Feel free to browse through my posts.
    </div>
  );

  function getCards() {
    return data.allMdx.nodes.map((card: Card) => {
      console.log("card: ", card.frontmatter.title);
      return <Card key={card.frontmatter.slug} data={card.frontmatter} />;
    });
  }

  return (
    <PageLayoutDesign>
      <div>
        {welcoming}
        {getCards()}
      </div>
    </PageLayoutDesign>
  );
};
