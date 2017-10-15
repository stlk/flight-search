import Link from 'next/link';
import styled from 'styled-components';

const Photo = styled.img`
  width: 50px;
`;

const Heading = styled.h1`
  margin: 0 1rem;
`;

const Profile = styled(({ className, profile }) =>
  <div className={className}>
    <Heading>{profile.name || profile.login}</Heading>
    <Photo src={profile.avatar_url} />
  </div>,
)`
  display: flex;
  align-items: center;
`;

export default Profile;
