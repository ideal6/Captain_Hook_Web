/* eslint-disable no-console */
import cn from 'classnames'
import { LogoutIcon } from '@heroicons/react/outline'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
// import { useState } from 'react'

const AppBar: React.FC = () => {
  // const [alarm, setAlarm] = useState(0)
  const router = useRouter()
  const logoutCallback = useCallback(() => {
    localStorage.setItem('token', null)
    router.push('/login')
  }, [])
  return (
    <div className={cn('h-74 p-5 flex flex-row justify-end bg-primary')}>
      {/* <BellIcon
        className={cn('h-8 mr-6 text-white cursor-pointer')}
        onClick={(e) => console.log(e)}
      /> */}
      {/* {alarm !== 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full">
          {alarm}
        </span>
      )} */}
      <LogoutIcon
        className={cn('h-8 mr-3 text-white cursor-pointer')}
        onClick={logoutCallback}
      />
    </div>
  )
}

export default AppBar
