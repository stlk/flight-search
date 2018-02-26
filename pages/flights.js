import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

import { getFlights } from '../lib/graphql';

import Search from '../components/Search';
import Pager from '../components/Pager';
import SearchResult from '../components/SearchResult';

const Content = styled.div`
  max-width: 900px;
`;

const Index = ({
  query: { from, to, date },
  query,
  flights,
  errors,
  pageInfo
}) =>
  <Layout>
    <Search {...query} />
    <Content>
      <p>
        Searching for flights from <strong>{from}</strong> to{' '}
        <strong>{to}</strong> on <strong>{date}</strong>.
      </p>
      {errors.map(error => <h3>{error.message}</h3>)}
      {flights.map(flight =>
        <SearchResult key={flight.node.id} flight={flight} />
      )}
      <Pager {...pageInfo} query={query} />
    </Content>
  </Layout>;

Index.getInitialProps = async function(context) {
  const { from, to, date, before, after } = context.query;
  let data = [];
  let errors = [];
  let pageInfo = {};

  try {
    const results = await getFlights(from, to, date, before, after);
    data = results.allFlights.edges;
    pageInfo = results.allFlights.pageInfo;
  } catch (e) {
    errors = e.response.errors;
  }

  console.log(`Flights fetched. Count: ${data.length}`);
  return {
    flights: data,
    errors,
    pageInfo,
    query: context.query
  };
};

export default Index;
