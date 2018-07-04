import api from '../Api';

export default {
  fetchShops (latitude, longitude) {
  
    /** GET request to backend server api */

    return api().get(`models/shop/shops?latitude=${latitude}&longitude=${longitude}`);

  }
};
