import Request from './request'

const request = new Request({
  baseURL: process.env.NODE_ENV,
  timeout: 3000,
  interceptors: {
    requestSuccessFn: config => {
      return config
    }
  }
})

export default request
