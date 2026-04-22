import productApi from './productApi.js';
import cartApi from './cartApi.js';
import authApi from './authApi.js';
import customerApi from './customerApi.js';
import employeeApi from './employeeApi.js';
import reviewApi from './reviewApi.js';
import orderApi from './orderApi.js';
import brandApi from './brandApi.js';

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

  // Cart methods
  getCart: cartApi.getCart.bind(cartApi),
  addCartItem: cartApi.addCartItem.bind(cartApi),
  addPreOrderToCart: cartApi.addPreOrderToCart.bind(cartApi),
  removeCartItem: cartApi.removeCartItem.bind(cartApi),
  clearCart: cartApi.clearCart.bind(cartApi),
  updateCartItem: cartApi.updateCartItem.bind(cartApi),
  checkStockBeforeCheckout: cartApi.checkStockBeforeCheckout.bind(cartApi),
  checkoutCart: cartApi.checkoutCart.bind(cartApi),

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

  // Order methods
  placeOrder: orderApi.placeOrder.bind(orderApi),
  cancelOrder: orderApi.cancelOrder.bind(orderApi),
  getUserOrders: orderApi.getUserOrders.bind(orderApi),
  getUserOrdersHistoryDto: orderApi.getUserOrdersHistoryDto.bind(orderApi),
  getOrderDetails: orderApi.getOrderDetails.bind(orderApi),
  confirmOrder: orderApi.confirmOrder.bind(orderApi),
  shipOrder: orderApi.shipOrder.bind(orderApi),
  updateTracking: orderApi.updateTracking.bind(orderApi),
  updateOrderRecipient: orderApi.updateOrderRecipient.bind(orderApi),
  markPaymentCollected: orderApi.markPaymentCollected.bind(orderApi),
  updatePaymentStatus: orderApi.updatePaymentStatus.bind(orderApi),
  moveToPending: orderApi.moveToPending.bind(orderApi),
  completeOrder: orderApi.completeOrder.bind(orderApi),
  searchOrdersByTracking: orderApi.searchOrdersByTracking.bind(orderApi),
  getOrders: orderApi.getOrders.bind(orderApi),
  checkOrderReturnStatus: orderApi.checkOrderReturnStatus.bind(orderApi),

  // Brand methods
  createBrand: brandApi.createBrand.bind(brandApi),
  updateBrand: brandApi.updateBrand.bind(brandApi),
  deleteBrand: brandApi.deleteBrand.bind(brandApi),
};

export default api;

// Also export individual APIs for more granular imports
export {
  productApi,
  cartApi,
  authApi,
  customerApi,
  employeeApi,
  reviewApi,
  orderApi,
  brandApi,
};
