import api from '../Api';

export default {
  fetchShops (latitude, longitude) {
  
    /** GET request to backend server api */

    return api().get(`models/shop/shops?latitude=${latitude}&longitude=${longitude}`);

  },
  
  fetchPhoto (reference) {

    return api().get(`models/shop/photo?photoreference=${reference}`);
  }
};
