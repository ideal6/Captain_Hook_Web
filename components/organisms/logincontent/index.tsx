import cn from 'classnames'
import Link from 'next/link'
import Button from '../../atoms/button'
import Box from '../../atoms/box'
import Input from '../../atoms/input'
import Span from '../../atoms/span'
import { ChangeEvent, useCallback, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const LoginContent: React.FC = () => {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loginCallback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      axios
        .post(
          `${
            process.env.NEXT_PUBLIC_API_URL ||
            'http://ec2-3-36-47-14.ap-northeast-2.compute.amazonaws.com:3000'
          }/auth/login`,
          {
            username,
            password,
          }
        )
        .then(({ data: { access_token } }) => {
          localStorage.setItem('token', access_token)
          router.push('/')
        })
        .catch(() => {
          alert('해당하는 계정이 없습니다.')
        })
    },
    [username, password]
  )

  return (
    <Box
      width="960"
      height="640"
      spacing="flex flex-shrink-0 items-center overflow-hidden"
      backgroundColor="white"
      hasShadow={true}
    >
      <div className={cn('w-1/2 flex flex-shrink-0 justify-center')}>
        <div className={cn('w-360 pt-4 pb-24 flex flex-col')}>
          <Span fontSize="big" spacing="mb-20 text-right" fontColor="gray-400">
            계정이 없으시다면?{' '}
            <Link href="./signup">
              <a className={cn('text-base text-primary')}>회원가입</a>
            </Link>
          </Span>

          <Span
            spacing="mb-2"
            fontSize="subTitle"
            fontColor="primary"
            fontWeight="bold"
          >
            로그인
          </Span>
          <Span spacing="" fontSize="big" fontColor="gray-400">
            Hook 선장으로 로그인하기
          </Span>

          {/* Login Form */}
          <form method="post" className={cn('w-full max-w-sm')}>
            <Input
              type="text"
              id="username"
              name="username"
              spacing="mt-12 mb-4"
              size="auth"
              placeholder="아이디"
              value={username}
              onChange={useCallback((e) => setUsername(e.target.value), [])}
            />
            <Input
              type="password"
              id="password"
              name="password"
              spacing="mb-10"
              size="auth"
              placeholder="비밀번호"
              value={password}
              onChange={useCallback((e) => setPassword(e.target.value), [])}
            />

            <Button
              type="submit"
              size="big"
              fontSize="normal"
              fontColor="white"
              backgroundColor="primary"
              // eslint-disable-next-line no-console
              onClickHandler={loginCallback}
            >
              로그인
            </Button>
          </form>
        </div>
      </div>

      <div className={cn('w-480 h-640 flex-shrink-0')}>
        <img src="auth-logo.png" className={cn('w-full h-full')} />
      </div>
    </Box>
  )
}

export default LoginContent
