import Link from 'next/link';
import styled from 'styled-components';

const Profile = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0 1rem;
  }

  img {
    width: 50px;
  }
`;

export default ({ profile }) =>
  <Profile>
    <h1>{profile.name || profile.login}</h1>
    <img src={profile.avatar_url} />
  </Profile>;
