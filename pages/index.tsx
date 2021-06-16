import Head from 'next/head'
import Link from 'next/link'

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Hook선장</title>
    </Head>
    <main>
      {' '}
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

export default Home
