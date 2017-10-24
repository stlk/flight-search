import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../pages/index.js';

describe('index', () => {
  it('Index shows gists', () => {
    const gists = [
      {
        id: 'gist-1',
        files: {
          file: {
            filename: 'filename'
          }
        }
      }
    ];
    const profile = {
      name: 'next guy',
      avatar_url: 'url'
    };
    const component = renderer.create(
      <Index gists={gists} profile={profile} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
