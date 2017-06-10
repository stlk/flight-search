import styled from 'styled-components';
import Header from './Header';

const Layout = ({ className, children }) =>
  <div className={className}>
    <Header />
    {children}
  </div>;

export default styled(Layout)`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;
