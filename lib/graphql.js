import { GraphQLClient } from 'graphql-request';

import fetch from 'isomorphic-unfetch';
global.fetch = fetch;

const client = new GraphQLClient(
  'https://mh67geuwe5.execute-api.eu-west-1.amazonaws.com/dev/',
  {
    headers: {},
  },
);

export function getFlights() {
  return client.request(`
    {
      allFlights(search: {from: {location: "Prague"}, to: {location: "Warsaw"}, date: {exact: "2017-10-25"}}) {
        edges {
          node {
            id
            departure {
              time
              localTime
            }
            arrival {
              time
              localTime
            }
            legs {
              flightNumber
              departure {
                airport {
                  name
                  city {
                    name
                  }
                }
              }
              arrival {
                airport {
                  name
                  city {
                    name
                  }
                }
              }
            }
            duration
            airlines {
              name
            }
            price {
              amount
              currency
            }
          }
        }
      }
    }
  `);
}
