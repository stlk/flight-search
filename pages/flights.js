import Layout from '../components/Layout';
import Link from 'next/link';

import { getFlights } from '../lib/graphql';

const Index = ({ flights }) =>
  <Layout>
    {flights.map(flight =>
      <div key={flight.node.id}>
        <h4>{flight.node.departure.time}</h4>
        <h6>{flight.node.airlines[0].name}</h6>
        <p>
          <span>{flight.node.duration} mins</span>{' - '}
          {flight.node.price.amount} {flight.node.price.currency}
        </p>
      </div>,
    )}
  </Layout>;

Index.getInitialProps = async function() {
  const data = await getFlights();

  console.log(`Flights fetched. Count: ${data.allFlights.edges.length}`);
  return {
    flights: data.allFlights.edges,
  };
};

export default Index;
