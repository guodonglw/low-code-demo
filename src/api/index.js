import axios from 'axios'

const apis = {
  get: async (path, params) => {
    return await axios.get(`${path}`, { params }).then(res => res.data).catch(err => err)
  }
}

export default apis
