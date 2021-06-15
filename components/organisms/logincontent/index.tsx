import cn from 'classnames'
import Link from 'next/link'
import Button from '../../atoms/button'
import Box from '../../atoms/box'
import Input from '../../atoms/input'
import Span from '../../atoms/span'

const LoginContent: React.FC = () => {
  return (
    <Box
      width="960"
      height="640"
      spacing="flex items-center overflow-hidden"
      backgroundColor="white"
      hasShadow={true}
    >
      <div className={cn('w-1/2 flex justify-center')}>
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
              type="email"
              id="email"
              name="email"
              spacing="mt-12 mb-4"
              size="auth"
              placeholder="아이디"
            />
            <Input
              type="password"
              id="password"
              name="password"
              spacing="mb-10"
              size="auth"
              placeholder="비밀번호"
            />

            <Button
              type="submit"
              text="로그인"
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

export default LoginContent
