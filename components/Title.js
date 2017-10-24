import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 5px;
  margin-bottom: 48px;
  margin-top: 0;
  text-transform: uppercase;

  a {
    color: var(--main-color);
    text-decoration: none;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

export default () =>
  <Title>
    <Link href="/">
      <a>
        <strong>gist</strong><br />
        viewer
      </a>
    </Link>
  </Title>;
