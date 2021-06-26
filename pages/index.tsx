import cn from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getApiClient } from '../utils/getApiClient'
import Modal from '../components/atoms/modal'

const Home: React.FC = () => {
  const apiClient = getApiClient()
  const [user, setUser] = useState(undefined)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

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

      <button onClick={toggle}>모달 띄우기</button>

      <Modal
        isOpen={isOpen}
        text="저장"
        closeHandler={toggle}
        // eslint-disable-next-line no-console
        confirmHandler={(e) => console.log(e)}
      >
        <div className={cn('w-360 h-360')}>모달 내용 넣기</div>
      </Modal>
    </div>
  )
}

export default Home
