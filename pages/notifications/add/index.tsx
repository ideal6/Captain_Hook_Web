import cn from 'classnames'
import AppBar from '../../../components/organisms/appbar'
import NotificationAdd from '../../../components/organisms/notificationadd'
import SideBar from '../../../components/organisms/sidebar'

const Add: React.FC = () => {
  return (
    <>
      <AppBar />
      <div className={cn('flex flex-row h-full bg-gray-100')}>
        <SideBar />
        <NotificationAdd />
      </div>
    </>
  )
}

export default Add
