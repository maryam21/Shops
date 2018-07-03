import Api from '../Api';

export default {
    signUp () {
      
        /** POST request to backend server api */
    
        return Api().post(`user/signup`);
    }
};