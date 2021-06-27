import cn from 'classnames'
import AppBar from '../../../components/organisms/appbar'
import SideBar from '../../../components/organisms/sidebar'
import WebhookAdd from '../../../components/organisms/webhookadd'

const Add: React.FC = () => {
  return (
    <div className={cn('flex flex-col h-screen')}>
      <AppBar />
      <div className={cn('flex flex-row flex-grow bg-gray-100')}>
        <SideBar />
        <div className={cn('flex w-full')}>
          <WebhookAdd />
        </div>
      </div>
    </div>
  )
}

export default Add
