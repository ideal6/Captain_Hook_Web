import cn from 'classnames'
import { BellIcon, DocumentTextIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const SideBar: React.FC = () => {
  const router = useRouter()

  return (
    <div className={cn('flex-shrink-0 w-247 p-7 h-full bg-secondary')}>
      <ul>
        <li
          className={cn(
            'flex flex-row font-bold cursor-pointer',
            router.pathname == '/webhooks' ? 'text-white' : 'text-gray-500'
          )}
          onClick={() => router.push('/webhooks')}
        >
          <DocumentTextIcon className={cn('w-5 mr-2')} />
          웹훅 리스트
        </li>
        <li
          className={cn(
            'flex flex-row font-bold mt-5 cursor-pointer',
            router.pathname == '/notifications' ? 'text-white' : 'text-gray-500'
          )}
          onClick={() => router.push('/notifications')}
        >
          <BellIcon className={cn('w-5 mr-2')} />
          알림 리스트
        </li>
      </ul>
    </div>
  )
}

export default SideBar
