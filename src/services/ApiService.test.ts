import ApiService from './ApiService';

import fixtures from '../../fixtures';

const context = describe;

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test('fetchCategories', async () => {
    const categories = await apiService.fetchCategories();

    expect(categories).not.toHaveLength(0);
  });

  describe('fetchProducts', () => {
    context('without category ID', () => {
      it('return all Products', async () => {
        const products = await apiService.fetchProducts();

        expect(products).not.toHaveLength(0);
      });
    });

    context('with category ID', () => {
      it('return Products', async () => {
        const { id } = fixtures.categories[0];

        const products = await apiService.fetchProducts({
          categoryId: id,
        });

        expect(products).not.toHaveLength(0);
      });
    });
  });
});
