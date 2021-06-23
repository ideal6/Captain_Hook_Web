import { ArrowLeftIcon } from '@heroicons/react/solid'
import cn from 'classnames'
import Link from 'next/link'
import Box from '../../atoms/box'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import Span from '../../atoms/span'

const SignUpContent: React.FC = () => {
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
            <Link href="./login">
              <a className={cn('text-base', 'flex', 'flex-row')}>
                <ArrowLeftIcon className={cn('w-5 h-5')} viewBox="0 0 20 16" />
                &nbsp;뒤로가기
              </a>
            </Link>

            <Span fontSize="big" spacing="mb-5 text-right" fontColor="gray-400">
              계정이 있으시다면?{' '}
              <Link href="./login">
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
              id="name"
              name="name"
              spacing="mt-10 mb-4"
              size="auth"
              placeholder="이름"
            />
            <Input
              type="email"
              id="email"
              name="email"
              spacing="mb-4"
              size="auth"
              placeholder="이메일"
            />
            <Input
              type="password"
              id="password1"
              name="password1"
              spacing="mb-4"
              size="auth"
              placeholder="비밀번호"
            />
            <Input
              type="password"
              id="password2"
              name="password2"
              spacing="mb-12"
              size="auth"
              placeholder="비밀번호 확인"
            />
            <Button
              type="submit"
              size="big"
              fontSize="normal"
              fontColor="white"
              backgroundColor="primary"
              // eslint-disable-next-line no-console
              onClickHandler={(e) => console.log(e.target)}
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
