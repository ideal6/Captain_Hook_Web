import cn from 'classnames'
import AppBar from '../../components/organisms/appbar'
import NotificationList from '../../components/organisms/notificationlist'
import SideBar from '../../components/organisms/sidebar'

const Notifications: React.FC = () => {
  return (
    <>
      <AppBar />
      <div className={cn('flex flex-row h-full bg-gray-100')}>
        <SideBar />
        <NotificationList spacing="flex-shrink flex-grow m-4 mb-24" />
      </div>
    </>
  )
}

export default Notifications
