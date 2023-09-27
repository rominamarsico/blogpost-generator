import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { PageWrapper } from "../components/page-wrapper";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageWrapper>
      <h1>Page not found</h1>
      <p>
        Sorry, we could not find the page you were looking for. Please try again
        later or feel free to browse my other blogposts.
      </p>

      <Link to="/">Go to homepage</Link>
    </PageWrapper>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
