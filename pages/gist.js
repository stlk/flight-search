import Layout from '../components/Layout';
import styled from 'styled-components';

import Profile from '../components/Profile';
import { getGist } from '../lib/api';

const Pre = styled.pre`
  font-size: 12px;
  background: #eee;
  padding: 1rem;
  width: 700px;
  overflow-x: scroll;
`;

const File = ({ filename, files }) =>
  <div>
    <h2>{filename}</h2>
    <code>
      <Pre>
        {files[filename].content}
      </Pre>
    </code>
  </div>;

const Gist = ({ gist }) =>
  <Layout>
    <Profile profile={gist.owner} />
    {Object.keys(gist.files).map(filename =>
      <File filename={filename} files={gist.files} />,
    )}
  </Layout>;

Gist.getInitialProps = async function(context) {
  const { id } = context.query;
  const gist = await getGist(id);
  console.log(`Fetched gist: ${gist.name}`);

  return { gist };
};

export default Gist;
