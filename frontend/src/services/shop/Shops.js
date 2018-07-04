import api from '../Api';

export default {
  fetchShops (latitude, longitude) {
  
    /** GET request to backend server api */

    return api().get(`api/models/shop/shops?latitude=${latitude}&longitude=${longitude}`);

  }
};
