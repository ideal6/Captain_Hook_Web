import cn from 'classnames'
// import Link from 'next/link'

const SideBar: React.FC = () => {
  return (
    <div className={cn('flex flex-no-wrap')}>
      {/* <div
        className={cn(
          'w-64 absolute sm: relative bg-gray-700 shadow md: h-screen flex-col justify-between hidden sm:flex'
        )}
      >
        <div className={cn('px-8')}>
          <div className={cn('h-16 w-full flex items-center')}>
            <ul className={cn('mt-24')}>
              {location == 1 && (
                <>
                  <li
                    className={cn(
                      'flex w-full justify-between text-white cursor-pointer items-cetner mb-6'
                    )}
                  >
                    <Link href="./webhooks">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn('h-7 w-7')}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </Link>
                    <Link href="./webhooks">
                      <span className={cn('text-lg ml-2')}>웹훅 리스트</span>
                    </Link>
                  </li>
                  <li
                    className={cn(
                      'flex w-full justify-between text-gray-300 hover: text-gray-500 cursor-pointer items-cetner mb-6'
                    )}
                  >
                    <Link href="./notifications">
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Link>
                    <Link href="./notifications">
                      <span className={cn('text-lg ml-2')}>알림 리스트</span>
                    </Link>
                  </li>
                </>
              )}
              {location == 2 && (
                <>
                  <li
                    className={cn(
                      'flex w-full justify-between text-gray-300 hover: text-gray-500 cursor-pointer items-cetner mb-6'
                    )}
                  >
                    <Link href="./webhooks">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn('h-7 w-7')}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </Link>
                    <Link href="./webhooks">
                      <span className={cn('text-lg ml-2')}>웹훅 리스트</span>
                    </Link>
                  </li>
                  <li
                    className={cn(
                      'flex w-full justify-between text-white cursor-pointer items-cetner mb-6'
                    )}
                  >
                    <Link href="./notifications">
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Link>
                    <Link href="./notifications">
                      <span className={cn('text-lg ml-2')}>알림 리스트</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SideBar
