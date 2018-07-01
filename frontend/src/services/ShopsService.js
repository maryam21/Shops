import Api from './Api'
import UserPosition from './UserPosition'

export default {
  fetchShops () {
      
    /** GET request to backend server api */
    
    return Api().get(`nearby-shops?latitude=${UserPosition.coords.latitude}&longitude=${UserPosition.coords.longitude}`)
  }
}