import axios from 'axios'
import errors from '../constants/errors'
import { compareErrResponse } from '../utils/handle_error'

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    'Accept-Language': 'ja|en',
  },
})

axiosClient.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const access_token = localStorage.getItem('access_token')
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`
      }
    }
    return config
  },
  error => Promise.reject(error),
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  function (err) {
    console.log('🚀 ~ file: Api.js:36 ~ err:', err)
    // Handle error
    const errResponse = err.response?.data?.error
    console.log('errResponse', errResponse)
    // if (
    //   errResponse &&
    //   compareErrResponse(errResponse, errors.UNAUTHENTICATED)
    // ) {
    //   localStorage.removeItem("access_token");
    //   window.location.href = "/login";
    // }

    throw err
  },
)

export default axiosClient
