import cn from 'classnames'
import Link from 'next/link'
import Box from '../../atoms/box'
import Span from '../../atoms/span'

interface WebhookItemProps {
  id: number
  type: string
  name: string
  createdAt: string
}

const WebhookItem: React.FC<WebhookItemProps> = ({
  id,
  type,
  name,
  createdAt,
}) => {
  // TODO: recentDate 변환
  const time = new Date(createdAt)

  return (
    <Link href={`/webhooks/${id}`}>
      <a>
        <Box
          width=""
          height="92"
          spacing="p-19 pl-34 mb-4 flex flex-row flex-shrink flex-grow"
          backgroundColor="white"
          hasShadow={true}
        >
          <img
            src={`/${type}.png`}
            className={cn('h-14 w-14 my-auto ml-8 mr-5')}
          />
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
              {`생성 날짜: ${time.toLocaleString()}`}
            </Span>
          </div>
        </Box>
      </a>
    </Link>
  )
}

export default WebhookItem
