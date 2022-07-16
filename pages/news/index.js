import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/nextJS-is-great">NextJS is a great framework</Link>
        </li>

        <li>
          <Link href="/news/react-best">React is the best </Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
