# Blog by Ramdadam

#### Made by Romina Marsico

## Start local dev server

Run `npm run dev` to start the local development server and see the results
at: http://localhost:8000/
View GraphiQL, an in-browser IDE, to explore your site's data and
schema: http://localhost:8000/\_\_\_graphql

## Add a new blog post entry

Inside the [Posts Folder](./src/posts) you can add a new .mdx or .md file and start typing your content.
Don't forget to insert the following at the top of your newly created file:

```
---
title: Category/Title
slug: /url-for-blog-post>
description: Short summary about your blog post for the Home Page.
date: MM/DD/YYYY
updated: MM/DD/YYYY
tags: ["topic1", "topic2"]
---
```

Title and slug are required fields in order to get a working blogpost entry. Anything else is optional.

See how the title also includes a category for the sidebar hierarchy? Separate category and title with a `/`. Only one or two entries will work (only title or title and category), the rest will be ignored.

## Project insides

- [index.tsx](./src/pages/index.tsx) is your project entry
- [blogpost-template.tsx](src/components/blogpost-template.tsx) is referenced
  in [gatsby-node.ts](./gatsby-node.ts) to generate the static blog-post layout, so don't change the
  file name only in one place.
