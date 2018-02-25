import { GraphQLClient } from 'graphql-request';

import fetch from 'isomorphic-unfetch';
global.fetch = fetch;

const client = new GraphQLClient('https://graphql.kiwi.com/', {
  headers: {}
});

export function getFlights(from, to, date) {
  return client.request(`
    {
      allFlights(search: {from: {location: "${from}"}, to: {location: "${to}"}, date: {exact: "${date}"}}) {
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
              airline {
                name
                code
                logoUrl
                isLowCost
              }
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
