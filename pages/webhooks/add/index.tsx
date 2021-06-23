import cn from 'classnames'
import AppBar from '../../../components/organisms/appbar'
import SideBar from '../../../components/organisms/sidebar'
import WebhookAdd from '../../../components/organisms/webhookadd'

const Add: React.FC = () => {
  return (
    <>
      <AppBar />
      <div className={cn('flex flex-row h-full bg-gray-100')}>
        <SideBar />
        <WebhookAdd />
      </div>
    </>
  )
}

export default Add
