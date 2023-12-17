import ApiService from './ApiService';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  test('fetchCategories', async () => {
    const categories = await apiService.fetchCategories();

    expect(categories).not.toHaveLength(0);
  });
});
