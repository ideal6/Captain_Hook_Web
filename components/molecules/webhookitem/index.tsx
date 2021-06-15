import cn from 'classnames'
import Box from '../../atoms/box'
import Span from '../../atoms/span'

interface WebhookItemProps {
  id: string
  name: string
  recentDate: Date
}

const WebhookItem: React.FC<WebhookItemProps> = ({ id, name, recentDate }) => {
  // TODO: recentDate 변환

  return (
    <Box
      width="1632"
      height="92"
      spacing="p-19 pl-34 mb-4 flex flex-row"
      backgroundColor="white"
      hasShadow={true}
    >
      <img src={`/${id}.png`} className={cn('h-14 w-14 my-auto ml-8 mr-5')} />
      <div className={cn('flex flex-col mt-3.5 mb-4 justify-evenly')}>
        <Span
          spacing=""
          fontSize="normal"
          fontColor="gray-800"
          fontWeight="bold"
        >
          {name}
        </Span>
        <Span spacing="" fontSize="normal" fontColor="gray-default">
          {`최근 받은 날짜: ${recentDate}`}
        </Span>
      </div>
    </Box>
  )
}

export default WebhookItem
