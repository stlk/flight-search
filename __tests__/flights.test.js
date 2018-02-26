import React from 'react';
import renderer from 'react-test-renderer';

import Flights from '../pages/flights.js';

const flights = [
  {
    node: {
      id: 'RmxpZ2h0OjM0MzUzMjQ1Ng==',
      departure: {
        time: '2018-03-06T20:10:00.000Z',
        localTime: '2018-03-06T21:10:00.000Z'
      },
      arrival: {
        time: '2018-03-06T22:35:00.000Z',
        localTime: '2018-03-06T23:35:00.000Z'
      },
      legs: [
        {
          airline: {
            name: 'Vueling',
            code: 'VY',
            logoUrl: 'https://images.kiwi.com/airlines/64/VY.png',
            isLowCost: true
          },
          flightNumber: 8657,
          departure: {
            airport: {
              name: 'Václav Havel Airport Prague',
              city: { name: 'Prague' }
            }
          },
          arrival: {
            airport: { name: 'Barcelona–El Prat', city: { name: 'Barcelona' } }
          }
        }
      ],
      duration: 145,
      price: { amount: 46, currency: 'EUR' }
    }
  },
  {
    node: {
      id: 'RmxpZ2h0OjMzNzkyOTI4Nw==',
      departure: {
        time: '2018-03-06T13:35:00.000Z',
        localTime: '2018-03-06T14:35:00.000Z'
      },
      arrival: {
        time: '2018-03-06T16:00:00.000Z',
        localTime: '2018-03-06T17:00:00.000Z'
      },
      legs: [
        {
          airline: {
            name: 'Ryanair',
            code: 'FR',
            logoUrl: 'https://images.kiwi.com/airlines/64/FR.png',
            isLowCost: true
          },
          flightNumber: 3040,
          departure: {
            airport: {
              name: 'Václav Havel Airport Prague',
              city: { name: 'Prague' }
            }
          },
          arrival: {
            airport: { name: 'Barcelona–El Prat', city: { name: 'Barcelona' } }
          }
        }
      ],
      duration: 145,
      price: { amount: 65, currency: 'EUR' }
    }
  }
];

const pageInfo = {
  hasNextPage: true,
  hasPreviousPage: false,
  startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
  endCursor: 'YXJyYXljb25uZWN0aW9uOjQ='
};

describe('flights', () => {
  it('shows flights', () => {
    const query = {
      from: 'Prague',
      to: 'Barcelona',
      date: '2018-03-06'
    };
    const component = renderer.create(
      <Flights
        flights={flights}
        pageInfo={pageInfo}
        query={query}
        errors={[]}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
