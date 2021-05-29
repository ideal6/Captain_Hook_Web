import cn from 'classnames'
import WebhookItem from '../../components/molecules/webhookitem'

const Webhooks: React.FC = () => {
  return (
    <div className={cn('p-3')}>
      {items.map(({ id, name, recentDate }, idx) => (
        <WebhookItem key={idx} id={id} name={name} recentDate={recentDate} />
      ))}
    </div>
  )
}

const items = [
  { id: 'github', name: '깃허브', recentDate: new Date() },
  { id: 'google_calendar', name: '구글 캘린더', recentDate: new Date() },
]

export default Webhooks
