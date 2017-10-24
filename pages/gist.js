import Layout from '../components/Layout';
import styled from 'styled-components';

import { getGist } from '../lib/api';
import Profile from '../components/Profile';
import File from '../components/File';

const Gist = ({ gist }) =>
  <Layout>
    <Profile profile={gist.owner} />
    {Object.keys(gist.files).map(filename =>
      <File filename={filename} gist={gist} />
    )}
  </Layout>;

Gist.getInitialProps = async function(context) {
  const { id } = context.query;
  const gist = await getGist(id);
  console.log(`Fetched gist: ${gist.name}`);

  return { gist };
};

export default Gist;
