import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
`;

const Post = props =>
  <Layout>
    <Title>{props.show.name}</Title>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>;

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
