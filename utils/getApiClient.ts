import axios from 'axios'
import Router from 'next/router'
export const getApiClient = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${
        global.window && window && window.localStorage.getItem('token')
      }`,
    },
  })
  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.response.status === 401) {
        Router.push('/login')
        return Promise.resolve({})
      } else return Promise.reject(error)
    }
  )
  return instance
}
