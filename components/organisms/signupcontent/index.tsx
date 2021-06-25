import { ArrowLeftIcon } from '@heroicons/react/solid'
import axios from 'axios'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import Box from '../../atoms/box'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import Span from '../../atoms/span'

interface DataProps {
  username: string
  email: string
  password1: string
  password2: string
}

const SignUpContent: React.FC = () => {
  const router = useRouter()
  const [user, setUser] = useState<DataProps>({
    username: '',
    email: '',
    password1: '',
    password2: '',
  })

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value })
  }

  const submitCallback = useCallback(
    (event) => {
      event.preventDefault()
      const { username, email, password1, password2 } = user

      if (!username || !email || !password1 || !password2) {
        return alert('양식을 모두 채워주세요.')
      }

      if (password1 !== password2) {
        return alert('패스워드가 다릅니다.')
      }

      axios
        .post(
          `${
            process.env.NEXT_PUBLIC_API_URL ||
            'http://ec2-3-36-47-14.ap-northeast-2.compute.amazonaws.com:3000'
          }/auth/signup`,
          {
            username,
            password: password1,
            email,
          }
        )
        .then(() => {
          router.push('/login')
        })
        .catch((error) => {
          alert('ERROR: ' + error)
        })
    },
    [user]
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
        <div className={cn('w-360 pb-3 flex flex-col')}>
          <div className={cn('flex justify-between text-gray-400')}>
            <Link href="/login">
              <a className={cn('text-base', 'flex', 'flex-row')}>
                <ArrowLeftIcon className={cn('w-5 h-5')} viewBox="0 0 20 16" />
                &nbsp;뒤로가기
              </a>
            </Link>

            <Span fontSize="big" spacing="mb-5 text-right" fontColor="gray-400">
              계정이 있으시다면?{' '}
              <Link href="/login">
                <a className={cn('text-base text-primary underline')}>로그인</a>
              </Link>
            </Span>
          </div>

          <Span
            spacing="mt-4"
            fontSize="subTitle"
            fontColor="primary"
            fontWeight="bold"
          >
            회원가입
          </Span>
          <Span spacing="mt-2" fontSize="big" fontColor="gray-400">
            새로운 계정 생성하기
          </Span>

          {/* Sign Up Form */}
          <form method="post" className={cn('w-full max-w-sm')}>
            <Input
              type="text"
              id="username"
              name="username"
              spacing="mt-10 mb-4"
              size="auth"
              placeholder="이름"
              onChange={onChangeHandler}
            />
            <Input
              type="email"
              id="email"
              name="email"
              spacing="mb-4"
              size="auth"
              placeholder="이메일"
              onChange={onChangeHandler}
            />
            <Input
              type="password"
              id="password1"
              name="password1"
              spacing="mb-4"
              size="auth"
              placeholder="비밀번호"
              onChange={onChangeHandler}
            />
            <Input
              type="password"
              id="password2"
              name="password2"
              spacing="mb-12"
              size="auth"
              placeholder="비밀번호 확인"
              onChange={onChangeHandler}
            />
            <Button
              type="submit"
              size="big"
              fontSize="normal"
              fontColor="white"
              backgroundColor="primary"
              onClickHandler={submitCallback}
            >
              회원가입
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

export default SignUpContent
