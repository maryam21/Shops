import api from '../Api';

export default {
  addShop (id) {
  
    /** POST request to backend server api */

    return api().post(`models/shop/favorite/${id}`);

  }
};