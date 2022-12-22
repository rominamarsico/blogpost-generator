const path = require("path");
const postTemplate = path.resolve(`./src/components/page-layout.tsx`);

type CreateNode = {
  node: any;
  getNode: any;
  actions: any;
};

type CreatePages = {
  graphql: any;
  actions: any;
  reporter: any;
};

exports.onCreateNode = ({ node, getNode, actions }: CreateNode) => {
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    actions.createNodeField({
      node,
      name: "slug",
      value: fileNode.name.toLowerCase(),
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }: CreatePages) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes;

  // you'll call `createPage` for each result
  posts.forEach((node: any) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.frontmatter.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
