import BaseApi, { API_BASE_URL } from './baseApi.js';

class BrandApi extends BaseApi {
  // Public list (đang có sẵn ở backend): GET /api/catalog/thuong-hieu
  async getBrands() {
    return await this._fetch(`${API_BASE_URL}/catalog/thuong-hieu`);
  }

  // Admin CRUD (backend bạn vừa làm): /api/thuong-hieu
  async createBrand(payload) {
    return await this._fetch(`${API_BASE_URL}/thuong-hieu`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async updateBrand(id, payload) {
    return await this._fetch(`${API_BASE_URL}/thuong-hieu/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }

  async deleteBrand(id) {
    await this._fetch(`${API_BASE_URL}/thuong-hieu/${id}`, { method: 'DELETE' });
  }
}

const brandApi = new BrandApi();
export default brandApi;