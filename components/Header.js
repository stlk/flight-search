import Link from 'next/link';
import styled from 'styled-components';

import Title from './Title';
import '../lib/progress';

const Anchor = styled(({ href, className, children }) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)`
  margin-right: 15px;
`;

const Header = styled(({ className }) =>
  <div className={className}>
    <Title />
    <nav>
      <Anchor href="/">Home</Anchor>
      <Anchor href="/about">About</Anchor>
      <Anchor href="/flights">Flights</Anchor>
    </nav>
  </div>
)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
