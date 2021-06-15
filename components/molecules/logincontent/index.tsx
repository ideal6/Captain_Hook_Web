import cn from 'classnames'
import Link from 'next/link'
import Button from '../../atoms/button'
import TextField from '../../atoms/textfield'
import Checkbox from '../../atoms/checkbox'
interface LoginContentProps {
  name: string
}

const LoginContent: React.FC<LoginContentProps> = ({ name }) => {
  return (
    <div className={cn('flex py-0')}>
      <div className={cn('flex-1')}>
        <div>
          <p className={cn('text-right')}>
            계정이 없으시다면?
            <Link href="./signup"> 회원가입</Link>
          </p>
        </div>

        <div>
          <p className={cn('text-2xl font-bold text-primary')}> {name} </p>
          <p className={cn('text-gray-400')}> Hook 선장으로 로그인하기 </p>
        </div>

        <form className={cn('w-full max-w-sm')}>
          <TextField
            name="아이디"
            type="text"
            placeholder="아이디"
            color="primary"
          />

          <TextField
            name="비밀번호"
            type="password"
            placeholder="비밀번호"
            color="primary"
          />
        </form>

        <div className={cn('bg-gray-500 flex flex-row')}>
          <Checkbox content="자동로그인" color="primary" />

          <div className={cn('w-1/2 bg-white')}>
            <p className={cn('flex-none text-light')}>
              아이디 혹은 비밀번호를 잃어버리셨나요?
              <Link href="./signup"> 찾기</Link>
            </p>
          </div>
        </div>

        <Button
          type="button"
          text="로그인"
          size="big"
          fontSize="normal"
          fontColor="white"
          backgroundColor="primary"
          // eslint-disable-next-line no-console
          onClickHandler={(e) => console.log(e.target)}
        ></Button>
      </div>

      <div className={cn('flex-1')}>
        <img src="auth-logo.png" className={cn('w-full h-full')}></img>
      </div>
    </div>
  )
}

export default LoginContent
