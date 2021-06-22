import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
          height: 100%;
          overflow: hidden;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
