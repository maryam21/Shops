import Api from './Api'

export default {
  fetchShops (latitude, longitude) {
      
    /** GET request to backend server api */
    
    return Api().get(`nearby-shops?latitude=${latitude}&longitude=${longitude}`)
  }
}