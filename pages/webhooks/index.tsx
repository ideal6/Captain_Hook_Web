import cn from 'classnames'
import AppBar from '../../components/organisms/appbar'
import SideBar from '../../components/organisms/sidebar'
import WebhookList from '../../components/organisms/webhooklist'

const Webhooks: React.FC = () => {
  return (
    <div className={cn('flex flex-col h-screen')}>
      <AppBar />
      <div className={cn('flex flex-row flex-grow bg-gray-100')}>
        <SideBar />
        <div className={cn('flex w-full')}>
          <WebhookList spacing="flex-shrink flex-grow m-4 mb-24" />
        </div>
      </div>
    </div>
  )
}

export default Webhooks
