/* eslint-disable no-console */
import cn from 'classnames'
import Webhook from '../../../types/webhook'
import Input from '../../atoms/input'
import ListBox from '../../atoms/listbox'
import Span from '../../atoms/span'
import CopyInput from '../copyinput'
import Table from '../table'

interface WebhookSettingProps {
  webhook: Webhook
  dispatch: any
}

const WebhookSetting: React.FC<WebhookSettingProps> = ({
  webhook,
  dispatch,
}) => {
  return (
    <>
      {/* 1. 알림 이름 */}
      <div className={cn('flex flex-col mt-6 mb-2')}>
        <label
          htmlFor="noti-name"
          className={cn('text-base font-bold text-gray-800')}
        >
          웹훅명
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          spacing="mt-2 mb-4"
          size="normal"
          placeholder="웹훅명을 입력해주세요"
          value={webhook.name}
          onChange={(e) => {
            dispatch({ type: 'name', payload: e.currentTarget.value })
          }}
        />
      </div>

      {/* 2. 웹훅 서비스 종류 */}
      <div className={cn('flex flex-col mt-4 mb-8')}>
        <Span
          spacing="mb-2"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          웹훅 서비스 종류
        </Span>
        <Span spacing="mb-4" fontSize="small" fontColor="gray-600">
          {
            '원하시는 서비스를 선택하면 기본적으로 사용되는 데이터 필드들의 내용들을 제공합니다. 제공되는 웹훅 서비스 이외 다른 웹훅 서비스를 사용할 경우 "기타 서비스" 항목을 선택하세요.'
          }
        </Span>
        <ListBox
          placeholder="웹훅 서비스 종류를 선택해주세요"
          options={serviceOptions}
          size="big"
          initialValue={webhook.type}
          onChange={(data: string) => dispatch({ type: 'type', payload: data })}
        />
      </div>

      {/* 3. 데이터 필드 축약 */}
      <div className={cn('flex flex-col mt-4 mb-10')}>
        <Span
          spacing="mb-2"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          데이터 필드 축약
        </Span>
        <Span spacing="mb-5" fontSize="small" fontColor="gray-600">
          {
            '"+" 버튼을 눌러서 축약할 데이터 필드를 추가해주세요. 축약할 필드를 설정하지 않아도 알림 조건 설정에서 사용할 수 있습니다.'
          }
        </Span>
        <Table title={['이름', '설명', '필드 위치']} content={tableItems} />
      </div>

      {/* 4. 웹훅 정보 */}
      <div className={cn('flex flex-col mt-5 my-10')}>
        <Span
          spacing="mb-1"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          웹훅 정보
        </Span>
        <Span spacing="mb-4" fontSize="small" fontColor="gray-600">
          사용하실 웹훅 서비스에서 아래의 주소로 데이터를 보내도록 주소를
          설정하세요.
        </Span>
        <CopyInput />
      </div>
    </>
  )
}

const tableItems = [
  { name: 'Name', desc: '사용자 이름', field: '.user.name' },
  { name: 'Email', desc: '사용자 이메일 주소', field: '.user.email' },
  {
    name: 'Repository Names',
    desc: '레포지토리 이름들',
    field: '.repository[any].name',
  },
]

const serviceOptions = [
  'Discord',
  'Github',
  'Google calendar',
  'Google drive',
  'Slack',
  'Telegram',
]

export default WebhookSetting
