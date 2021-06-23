import cn from 'classnames'
import AppBar from '../../components/organisms/appbar'
import SideBar from '../../components/organisms/sidebar'
import WebhookList from '../../components/organisms/webhooklist'

const Webhooks: React.FC = () => {
  return (
    <>
      <AppBar />
      <div className={cn('flex flex-row h-full bg-gray-100')}>
        <SideBar />
        <WebhookList spacing="flex-shrink flex-grow m-4 mb-24" />
      </div>
    </>
  )
}

export default Webhooks
