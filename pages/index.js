import Layout from '../components/Layout';
import Link from 'next/link';

import { getGists, getProfile } from '../lib/api';
import Profile from '../components/Profile';

const Index = ({ profile, gists }) =>
  <Layout>
    <Profile profile={profile} />
    <ul>
      {gists.map(gist =>
        <li key={gist.id}>
          <Link as={`/gist/${gist.id}`} href={`/gist?id=${gist.id}`}>
            <a>{gist.files[Object.keys(gist.files)[0]].filename}</a>
          </Link>
        </li>,
      )}
    </ul>
  </Layout>;

Index.getInitialProps = async function() {
  const data = await getGists('stlk');
  const profile = await getProfile('stlk');

  console.log(`Gists fetched. Count: ${data.length}`);

  return {
    gists: data,
    profile,
  };
};

export default Index;
