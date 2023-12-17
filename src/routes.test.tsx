import { screen } from '@testing-library/react';

import PATHNAME from './constants/pathname';

import { renderRouter } from './test-helpers';

const context = describe;

describe('routes', () => {
  context(`when the current path is '${PATHNAME.HOME}'`, () => {
    it('renders the home page', async () => {
      renderRouter(PATHNAME.HOME);

      screen.getByText(/Shop/);
    });
  });
});
