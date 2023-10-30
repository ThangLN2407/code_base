import axios from 'axios'
import Configs from '../configs'

const endpoint = `${Configs.API_URL}/api/v1`

const axiosClient = axios.create({
  baseURL: endpoint,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    'Accept-Language': 'ja|en',
  },
})

// export const GET = (url, params) => {
//   return axiosClient.get(url, {
//     params,
//   })
// }

export const GET = async (url, params) => {
  return await axiosClient.get(url, {
    headers: {
      ...axiosClient.headers,
      Authorization: `Bearer ${params?.token}`,
    },
  })
}

export const POST = async (url, data) => {
  return await axiosClient.post(url, data?.payload, {
    headers: { ...axiosClient.headers, Authorization: `Bearer ${data?.token}` },
  })
}

export const PUT = async (url, data) => {
  return await axiosClient.put(url, data?.payload, {
    headers: { ...axiosClient.headers, Authorization: `Bearer ${data?.token}` },
  })
}

export const DELETE = (url, params) =>
  axiosClient.get(url, {
    params,
  })
