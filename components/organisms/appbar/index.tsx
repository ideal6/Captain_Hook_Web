import cn from 'classnames'

interface AppBarProps {
  alarm: number
}

const AppBar: React.FC<AppBarProps> = ({ alarm }) => {
  return (
    <div>
      <nav className={cn('bg-primary')}>
        <div className={cn('max-w-7x1 mx-auto px-5 sm:px-5 lg:px-5')}>
          <div className={cn('flex items-center justify-end h-16')}>
            <div className={cn('hidden md:block')}>
              <div className={cn('ml-4 flex items-center md:ml-6')}>
                <button className={cn('p-5 text-white hover:text-white')}>
                  <span className={cn('relative inline-block')}>
                    <svg
                      className={cn('h-6 w-6')}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    {alarm !== 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full">
                        {alarm}
                      </span>
                    )}
                  </span>
                </button>
                <button className={cn('p-1 text-white hover:text-white')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn('h-6 w-6')}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AppBar
