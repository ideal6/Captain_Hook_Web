import cn from 'classnames'
import SignUpContent from '../../components/organisms/signupcontent'

const SignUp: React.FC = () => {
  return (
    <div
      className={cn(
        'w-screen h-screen bg-gray-100',
        'flex justify-center items-center'
      )}
    >
      <SignUpContent />
    </div>
  )
}

export default SignUp
