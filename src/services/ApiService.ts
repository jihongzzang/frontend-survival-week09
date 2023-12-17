import axios from 'axios';

import { Category } from '../types';

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL || 'https://shop-demo-api-01.fly.dev';

export default class ApiService {
  private instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchCategories(): Promise<Category[]> {
    const { data } = await this.instance.get('/categories');

    const { categories } = data;

    return categories ?? [];
  }
}

export const apiService = new ApiService();
