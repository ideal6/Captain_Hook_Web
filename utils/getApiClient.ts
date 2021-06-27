import axios from 'axios'
import Router from 'next/router'
export const getApiClient = () => {
  const instance = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_API_URL ||
      'http://ec2-3-36-47-14.ap-northeast-2.compute.amazonaws.com:3000',
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
      }
      if (error?.response?.data?.message)
        // eslint-disable-next-line no-console
        console.log(error.response.data.message)
      return Promise.reject(error)
    }
  )
  return instance
}
