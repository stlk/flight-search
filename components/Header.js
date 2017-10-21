import Link from 'next/link';
import styled from 'styled-components';
import '../lib/progress';

const Anchor = styled(({ href, className, children }) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>,
)`
  margin-right: 15px;
`;

const Title = styled(({ className }) =>
  <h1 className={className}>
    <Link href="/">
      <a>
        <strong>gist</strong><br />
        viewer
      </a>
    </Link>
  </h1>,
)`
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

const Header = styled(({ className }) =>
  <div className={className}>
    <Title />
    <nav>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/about">About</Anchor>
    </nav>
  </div>,
)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
