import { GraphQLClient } from 'graphql-request';

import fetch from 'isomorphic-unfetch';
global.fetch = fetch;

const client = new GraphQLClient('https://graphql.kiwi.com/', {
  headers: {}
});

export function getLocations(query) {
  return client.request(`
    {
      allLocations(search: "${query}", options: { locationType: city }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);
}

export function getFlights(from, to, date, before = null, after = null) {
  return client.request(`
    {
      allFlights(before: ${before ? '"' + before + '"' : null}, after: ${after
    ? '"' + after + '"'
    : null}, first: 5, search: { from: {location: "${from}"}, to: {location: "${to}"}, date: {exact: "${date}"}}) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
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
