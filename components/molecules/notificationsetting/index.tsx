/* eslint-disable no-console */
import cn from 'classnames'
import Input from '../../atoms/input'
import Span from '../../atoms/span'
import Table from '../table'

const NotificationSetting: React.FC = () => {
  return (
    <>
      {/* 1. 알림 이름 */}
      <div className={cn('flex flex-col mt-6 mb-2')}>
        <label
          htmlFor="noti-name"
          className={cn('text-base font-bold text-gray-800')}
        >
          알림명
        </label>
        <Input
          type="text"
          id="noti-name"
          name="noti-name"
          spacing="my-2"
          size="normal"
          placeholder="알림명을 입력해주세요"
        />
      </div>

      {/* 2. 알림 서비스 종류 */}
      <div className={cn('flex flex-col my-4')}>
        <Span
          spacing="mb-1"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          알림 서비스 종류
        </Span>
        <Span spacing="mb-4" fontSize="small" fontColor="gray-600">
          {
            '"+" 버튼을 눌러서 제공되는 알림 받을 서비스를 선택한 후, 필요 사항을 기재해주세요.'
          }
        </Span>
        <Table title={['이름', '종류', 'KEY']} content={tableItems} />
      </div>

      {/* 3. 알림 조건 설정 */}
      <div className={cn('flex flex-col my-6')}>
        <Span
          spacing="mb-1"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          알림 조건 설정
        </Span>
        <Span spacing="mb-4" fontSize="small" fontColor="gray-600">
          참조할 웹훅을 이용하여 알림 조건을 입력해주세요.
        </Span>
        {/* TODO: 알림 조건 세부 설정 */}
      </div>
    </>
  )
}

const tableItems = [
  { name: '문자 A', type: 'SMS', key: '010-1234-5678' },
  { name: '이메일 A', type: 'email', key: 'company@example.com' },
  { name: '이메일 B', type: 'email', key: 'private@example.com' },
]

export default NotificationSetting
