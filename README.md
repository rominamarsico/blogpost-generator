# Blog by Ramdadam

#### Made by Romina Marsico

### Start local dev server

Run `npm run dev` to start the local development server and see the results
at: http://localhost:8000/
View GraphiQL, an in-browser IDE, to explore your site's data and
schema: http://localhost:8000/___graphql

### Add a new blog post entry

Inside the [Posts Folder](./src/posts) you can add a new .mdx file and start typing your content.
Don't forget to insert the following at the top of your newly created .mdx file:

```
---
title: <Title>
slug: </url-for-blog-post>
description: <Short summary about your blog post for the Home Page.>
---
```

### Project insides

- [index.tsx](./src/pages/index.tsx) is your project entry
- [page-layout.tsx](src/components/page-layout.tsx) is referenced
  in [gatsby-node.ts](./gatsby-node.ts) to generate the static blog-post layout, so don't change the
  file name only in one place.