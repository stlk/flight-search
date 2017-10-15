import styled from 'styled-components';
import Header from './Header';

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Layout = ({ className, children }) =>
  <div className={className}>
    <Header />
    <Content>
      {children}
    </Content>
  </div>;

export default styled(Layout)`
  margin: 20px;
`;
