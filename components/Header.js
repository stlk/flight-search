import Link from 'next/link';
import styled from 'styled-components';

const Anchor = styled(({ href, className, children }) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>,
)`
  margin-right: 15px;
`;

const Header = () =>
  <div>
    <Anchor href="/">Home</Anchor>
    <Anchor href="/about">About</Anchor>
  </div>;

export default Header;
