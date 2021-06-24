import cn from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getApiClient } from '../utils/getApiClient'

const Home: React.FC = () => {
  const apiClient = getApiClient()
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    apiClient
      .get('/users/me')
      .then(({ data }) => setUser(data))
      .catch(console.error)
  }, [])
  return (
    <div className={cn('w-full h-full')}>
      <Head>
        <title>Hook선장</title>
      </Head>
      <main>
        {' '}
        <span>User: {user && user.username}</span>
        <h1>페이지</h1>
        <ul>
          <li>
            <Link href="/webhooks">
              <a>Webhook List Page</a>
            </Link>
          </li>
          <li>
            <Link href="/notifications">
              <a>Notification List Page</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login Page</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Sign Up Page</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
