import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export default {
  bootstrap () {
    const mock = new MockAdapter(axios)

    mock.onGet('/list').reply(config => {
      return new Promise((resolve, reject) => {
        resolve([
          200,
          {
            msg: 'success',
            data: {
              list: [
                {
                  id: 1
                },
                {
                  id: 2
                }
              ]
            }
          }
        ])
      })
    })
  }
}
