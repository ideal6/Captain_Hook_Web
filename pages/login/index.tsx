import cn from 'classnames'
import LoginContent from '../../components/organisms/logincontent'

const Login: React.FC = () => {
  return (
    <div
      className={cn(
        'w-screen h-screen bg-gray-100',
        'flex justify-center items-center'
      )}
    >
      <LoginContent />
    </div>
  )
}

export default Login
