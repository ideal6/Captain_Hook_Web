import cn from 'classnames'

interface AuthBoxProps {
  spacing: string
  backgroundColor: string
}

const AuthBox: React.FC<AuthBoxProps> = ({ backgroundColor, children }) => {
  return (
    <div className={cn('w-screen h-screen bg-gray-100')}>
      <div className={cn('flex justify-center content-center')}>
        <div
          className={cn(
            // `w-${width} h-${height} ${spacing}`,
            `bg-${backgroundColor}`,
            'shadow overflow-hidden sm:rounded-lg',
            'w-1/2 h-1/2 content-center mt-40 '
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthBox
