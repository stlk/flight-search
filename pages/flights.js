import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

import { getFlights } from '../lib/graphql';

import Search from '../components/Search';
import SearchResult from '../components/SearchResult';

const Content = styled.div`
  max-width: 900px;
`;

const Index = ({ query: { from, to, date }, query, flights, errors }) =>
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
    </Content>
  </Layout>;

Index.getInitialProps = async function(context) {
  const { from, to, date } = context.query;
  let data = [];
  let errors = [];

  try {
    const results = await getFlights(from, to, date);
    data = results.allFlights.edges;
  } catch (e) {
    errors = e.response.errors;
  }

  console.log(`Flights fetched. Count: ${data.length}`);
  return {
    flights: data,
    errors,
    query: context.query
  };
};

export default Index;
