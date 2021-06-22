import cn from 'classnames'
import AppBar from '../../components/organisms/appbar'
import SideBar from '../../components/organisms/sidebar'
import WebhookList from '../../components/organisms/webhooklist'

const Webhooks: React.FC = () => {
  return (
    <>
      <AppBar />
      <div className={cn('flex flex-row h-full')}>
        <SideBar />
        <WebhookList spacing="m-3" />
      </div>
    </>
  )
}

export default Webhooks
