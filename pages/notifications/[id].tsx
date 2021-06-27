import cn from 'classnames'
import AppBar from './../../components/organisms/appbar'
import NotificationModify from './../../components/organisms/notificationmodify'
import SideBar from './../../components/organisms/sidebar'

const Add: React.FC = () => {
  return (
    <div className={cn('flex flex-col h-screen')}>
      <AppBar />
      <div className={cn('flex flex-row flex-grow bg-gray-100')}>
        <SideBar />
        <div className={cn('flex w-full')}>
          <NotificationModify />
        </div>
      </div>
    </div>
  )
}

export default Add
