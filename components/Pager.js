import Link from 'next/link';
import styled from 'styled-components';

const Pager = styled.div`
  text-align: center;

  a {
    display: inline-block;
    margin: 1rem;
  }

  a:not([href]) {
    cursor: default;
  }
`;

const PageLink = ({ hasPage, cursor, query, children, name }) => {
  const newQuery = {
    ...query,
    after: null,
    before: null,
    [name]: cursor
  };

  if (hasPage) {
    return (
      <Link href={{ pathname: '/flights', query: newQuery }} passHref>
        {children}
      </Link>
    );
  } else {
    return children;
  }
};

export default ({
  hasNextPage,
  hasPreviousPage,
  startCursor,
  endCursor,
  query
}) =>
  <Pager>
    <PageLink
      hasPage={hasPreviousPage}
      cursor={startCursor}
      name="before"
      query={query}
    >
      <a>
        Previous
      </a>
    </PageLink>
    <PageLink
      hasPage={hasNextPage}
      cursor={endCursor}
      name="after"
      query={query}
    >
      <a>
        Next
      </a>
    </PageLink>
  </Pager>;
