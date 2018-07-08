import api from '../Api';

export default {
  signUp (credentials) {
  
    /** POST request to backend server api */

    return api().post(`models/user/signup`, credentials)
  }
};