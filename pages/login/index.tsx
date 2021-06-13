import AuthBox from '../../components/atoms/authbox'
import LoginContent from '../../components/molecules/logincontent'

const Login: React.FC = () => {
  return (
    <AuthBox spacing="p-0" backgroundColor="white">
      <LoginContent name="로그인"></LoginContent>
    </AuthBox>
  )
}

export default Login
