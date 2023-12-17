import { screen, waitFor } from '@testing-library/react';

import { renderRouter } from './test-helpers';

import fixtures from '../fixtures';

import PATHNAME from './constants/pathname';

const [categories] = fixtures.categories;

const context = describe;

describe('routes', () => {
  context(`when the current path is '${PATHNAME.HOME}'`, () => {
    it('renders the home page', async () => {
      renderRouter(PATHNAME.HOME);

      await waitFor(() => {
        screen.getByText(/Shop/);
      });
    });
  });

  context(`when the current path is '${PATHNAME.PRODUCTS}'`, () => {
    context('without category ID', () => {
      it('renders the product list page', async () => {
        renderRouter(PATHNAME.PRODUCTS);
        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });

    context('with category ID', () => {
      it('renders the product list page', async () => {
        renderRouter(`${PATHNAME.PRODUCTS}?categoryId=${categories.id}`);
        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });
});
