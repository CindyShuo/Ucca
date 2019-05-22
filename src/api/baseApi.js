import fly from '../config/fly'

const BaseApi = {
  getHomePage: () => {
    return fly.get('/api/homepage')
  }
}

export default BaseApi
