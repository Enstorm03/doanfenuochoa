import productApi from './productApi.js';
import authApi from './authApi.js';
import customerApi from './customerApi.js';
import employeeApi from './employeeApi.js';
import reviewApi from './reviewApi.js';

// Combined API object for backward compatibility
const api = {
   // Product methods
  getAllProducts: productApi.getAllProducts.bind(productApi),
  getProductById: productApi.getProductById.bind(productApi),
  createProduct: productApi.createProduct.bind(productApi),
  updateProduct: productApi.updateProduct.bind(productApi),
  deleteProduct: productApi.deleteProduct.bind(productApi),
  getCategories: productApi.getCategories.bind(productApi),
  getBrands: productApi.getBrands.bind(productApi),
  searchProducts: productApi.searchProducts.bind(productApi),

  // Auth methods
  login: authApi.login.bind(authApi),
  registerCustomer: authApi.registerCustomer.bind(authApi),

  // Customer methods
  getCustomers: customerApi.getCustomers.bind(customerApi),
  getCustomer: customerApi.getCustomer.bind(customerApi),
  createCustomer: customerApi.createCustomer.bind(customerApi),
  updateCustomer: customerApi.updateCustomer.bind(customerApi),
  resetCustomerPassword: customerApi.resetCustomerPassword.bind(customerApi),
  deleteCustomer: customerApi.deleteCustomer.bind(customerApi),

  // Employee methods
  getEmployees: employeeApi.getEmployees.bind(employeeApi),
  getEmployee: employeeApi.getEmployee.bind(employeeApi),
  createEmployee: employeeApi.createEmployee.bind(employeeApi),
  updateEmployeeRole: employeeApi.updateEmployeeRole.bind(employeeApi),
  resetEmployeePassword: employeeApi.resetEmployeePassword.bind(employeeApi),
  deleteEmployee: employeeApi.deleteEmployee.bind(employeeApi),

  // Review methods
  createReview: reviewApi.createReview.bind(reviewApi),
};

export default api;

// Also export individual APIs for more granular imports
export {
  productApi,
  authApi,
  customerApi,
  employeeApi,
  reviewApi,
};