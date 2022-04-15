import Link from "next/link";
import { Fragment } from 'react';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/react">React</Link>
        </li>
        <li>
          <Link href="/news/nextjs">NextJS</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
 