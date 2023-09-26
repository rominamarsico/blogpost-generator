import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { PageWrapper } from "../components/page-wrapper";
import { Card } from "../components/card";
import { IBlogpost } from "../model/blogpost";
import { Badge } from "../components/badge";

interface ICard {
  frontmatter: IBlogpost;
  children: React.ReactNode;
}

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            description
            date(formatString: "D MMMM YYYY")
            updated(formatString: "D MMMM YYYY")
            tags
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
    return data.allMdx.nodes.map((card: ICard) => {
      console.log("card.frontmatter.tags: ", card.frontmatter.tags);

      return (
        <Card key={card.frontmatter.slug} data={card.frontmatter}>
          {getBadges(card.frontmatter.tags)}
        </Card>
      );
    });
  }

  function getBadges(tags: string[]) {
    return tags?.map((tag: string) => {
      return <Badge key={tag} label={tag} />;
    });
  }

  return (
    <PageWrapper>
      {welcoming}
      {getCards()}
    </PageWrapper>
  );
};

export default Home;
