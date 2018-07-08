import api from '../Api';

export default {
  login (credentials) {
  
    /** POST request to backend server api */

    return api().post(`models/user/login`, credentials)
  }
};
