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
      spacing="flex items-center overflow-hidden"
      backgroundColor="white"
      hasShadow={true}
    >
      <div className={cn('w-1/2 flex justify-center')}>
        <div className={cn('w-360 pb-3 flex flex-col')}>
          <div className={cn('flex flex-row mb-8')}>
            <div className={cn('w-1/2')}>
              <div className={cn('flex text-gray-400')}>
                <Link href="./login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn('h-6 w-6 mr-1')}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />{' '}
                  </svg>
                </Link>
                <Link href="./login">
                  <a className={cn('text-base')}>뒤로가기</a>
                </Link>
              </div>
            </div>

            <div className={cn('w-1/2 text-right')}>
              <Span
                fontSize="big"
                spacing="mb-5 text-right"
                fontColor="gray-400"
              >
                계정이 있으시다면?{' '}
                <Link href="./login">
                  <a className={cn('text-base text-primary underline')}>
                    로그인
                  </a>
                </Link>
              </Span>
            </div>
          </div>
          <Span
            spacing="mb-2"
            fontSize="subTitle"
            fontColor="primary"
            fontWeight="bold"
          >
            회원가입
          </Span>

          <Span spacing="" fontSize="big" fontColor="gray-400">
            새로운 계정 생성하기
          </Span>

          {/* Sign Up Form */}
          <form method="post" className={cn('w-full max-w-sm')}>
            <Input
              type="text"
              id="name"
              name="name"
              spacing="mt-12"
              size="auth"
              placeholder="이름"
            />
            <Input
              type="email"
              id="email"
              name="email"
              spacing="mt-6"
              size="auth"
              placeholder="이메일"
            />
            <Input
              type="password"
              id="password1"
              name="password1"
              spacing="mt-6"
              size="auth"
              placeholder="비밀번호"
            />
            <Input
              type="password"
              id="password2"
              name="password2"
              spacing="mt-6 mb-14"
              size="auth"
              placeholder="비밀번호 확인"
            />
            <Button
              type="submit"
              text="회원가입"
              size="big"
              fontSize="normal"
              fontColor="white"
              backgroundColor="primary"
              // eslint-disable-next-line no-console
              onClickHandler={(e) => console.log(e.target)}
            />
          </form>
        </div>
      </div>
      <div className={cn('w-1/2')}>
        <img src="auth-logo.png" className={cn('w-full h-full')} />
      </div>
    </Box>
  )
}

export default SignUpContent
