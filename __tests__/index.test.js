import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../pages/index.js';

describe('index', () => {
  it('Index shows search results', () => {
    const shows = [
      {
        show: {
          id: 'show-1',
          name: 'show name',
        },
      },
    ];
    const component = renderer.create(<Index shows={shows} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
