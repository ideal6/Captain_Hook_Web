/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import cn from 'classnames'
import { useCallback, useState } from 'react'
import Notification from '../../../types/notification'
import Webhook from '../../../types/webhook'
import Input from '../../atoms/input'
import ListBox from '../../atoms/listbox'
import Modal from '../../atoms/modal'
import Span from '../../atoms/span'
import Table from '../table'
import NotificationCondition from '../notificationcondition'

interface NotificationSettingProps {
  notification: Notification
  dispatch: any
}

enum ModalStatus {
  CLOSED,
  ADD,
  MODIFY,
}

interface ModalFormData {
  id?: number
  idx?: number
  name: string
  type: string
  key: string
}

const NotificationSetting: React.FC<NotificationSettingProps> = ({
  notification,
  dispatch,
}) => {
  const [modalStatus, setModalStatus] = useState<ModalStatus>(
    ModalStatus.CLOSED
  )
  const [modalFormData, setModalFormData] = useState<ModalFormData>({
    name: '',
    type: '',
    key: '',
  })

  const onFormInputChange = useCallback(
    (e) => {
      setModalFormData({
        ...modalFormData,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    },
    [modalFormData]
  )

  const onFormListBoxChange = useCallback((type) => {
    console.log(modalFormData)
    setModalFormData((modalFormData) => ({ ...modalFormData, type }))
  }, [])

  const onAddFormConfirm = useCallback(() => {
    const { id: _, idx: __, ...addMethodData } = modalFormData
    dispatch({
      type: 'methods',
      payload: [...notification.methods, addMethodData],
    })
    setModalStatus(ModalStatus.CLOSED)
  }, [modalFormData, notification])

  const onModifyFormConfirm = useCallback(() => {
    const { idx = 0, ...modifyMethodData } = modalFormData
    dispatch({
      type: 'methods',
      payload: notification.methods.map((method, mIdx) =>
        mIdx !== idx ? method : modifyMethodData
      ),
    })
    setModalStatus(ModalStatus.CLOSED)
  }, [modalFormData, notification])

  const onModifyFormDelete = useCallback(() => {
    const { idx = 0 } = modalFormData
    dispatch({
      type: 'methods',
      payload: notification.methods.filter((_, fIdx) => fIdx !== idx),
    })
    setModalStatus(ModalStatus.CLOSED)
  }, [modalFormData, notification])

  if (!notification.condition) notification.condition = '$|==|$'
  const condition = {
    left: notification?.condition?.split('|')[0] || '$',
    center: notification?.condition?.split('|')[1] || '==',
    right: notification?.condition?.split('|')[2] || '$',
  }

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
          spacing="mt-2 mb-4"
          size="normal"
          placeholder="알림명을 입력해주세요"
          value={notification.name}
          onChange={(e) =>
            dispatch({ type: 'name', payload: e.currentTarget.value })
          }
        />
      </div>

      {/* 2. 알림 서비스 종류 */}
      <div className={cn('flex flex-col mt-4 mb-8')}>
        <Span
          spacing="mb-2"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          알림 서비스 종류
        </Span>
        <Span spacing="mb-4" fontSize="small" fontColor="gray-600">
          {
            '"+" 버튼을 눌러서 제공되는 알림 서비스 중 알림 받고 싶은 서비스를 선택한 후, 알림명, KEY 등 필요 사항을 기재해주세요.'
          }
        </Span>

        <Table
          title={['이름', '종류', 'KEY']}
          content={notification.methods}
          addDataField={() => {
            setModalFormData({ name: '', type: '', key: '' })
            setModalStatus(ModalStatus.ADD)
          }}
          modifyDataField={(idx) => () => {
            setModalFormData({ ...notification.methods[idx], idx })
            setModalStatus(ModalStatus.MODIFY)
          }}
          columns={['name', 'type', 'key']}
        />
        {/* 추가 모달 */}
        <Modal
          isOpen={modalStatus !== ModalStatus.CLOSED}
          leftText={modalStatus === ModalStatus.ADD ? '취소' : '삭제'}
          rightText={modalStatus === ModalStatus.ADD ? '추가' : '수정'}
          leftHandler={
            modalStatus === ModalStatus.ADD
              ? () => setModalStatus(ModalStatus.CLOSED)
              : onModifyFormDelete
          }
          confirmHandler={
            modalStatus === ModalStatus.ADD
              ? onAddFormConfirm
              : onModifyFormConfirm
          }
        >
          <div className={cn('flex flex-col')}>
            <Span
              spacing="mb-5"
              fontSize="subTitle"
              fontColor="gray-800"
              fontWeight="bold"
            >
              {modalStatus === ModalStatus.ADD
                ? '알림 서비스 추가'
                : '알림 서비스 수정'}
            </Span>
            <div className={cn('flex flex-col')}>
              <label
                htmlFor="name"
                className={cn('text-base font-bold text-gray-800')}
              >
                알림 서비스명
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                spacing="mt-2 mb-6"
                size="normal"
                placeholder="알림 서비스명을 입력해주세요"
                value={modalFormData.name}
                onChange={onFormInputChange}
              />
            </div>
            <div className={cn('flex flex-col mb-6')}>
              <label
                htmlFor="description"
                className={cn('text-base font-bold text-gray-800')}
              >
                알림 서비스 종류
              </label>
              <ListBox
                placeholder="알림 종류"
                options={['discord', 'email', 'slack', 'SMS', 'telegram']}
                size="normal"
                initialValue={modalFormData.type}
                onChange={onFormListBoxChange}
              />
            </div>
            <div className={cn('flex flex-col')}>
              <label
                htmlFor="service-key"
                className={cn('text-base font-bold text-gray-800')}
              >
                KEY
              </label>
              <Span spacing="mt-1 mb-2" fontSize="small" fontColor="gray-600">
                SMS는 010-XXXX-XXX 형식, Email은 이메일 형식, 이외에는 KEY 값을
                입력해주세요.
              </Span>
              <Input
                type="text"
                id="key"
                name="key"
                spacing="mb-6"
                size="big"
                placeholder="KEY 값을 입력해주세요"
                value={modalFormData.key}
                onChange={onFormInputChange}
              />
            </div>
          </div>
        </Modal>
      </div>

      {/* 3. 알림 조건 설정 */}
      <div className={cn('flex flex-col mt-4 mb-10')}>
        <Span
          spacing="mb-2"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          알림 조건 설정
        </Span>
        <Span spacing="mb-2" fontSize="small" fontColor="gray-600">
          사용자가 웹훅 데이터 필드 축약에서 설정한 값들을 이용하여, 알림 조건을
          입력해주세요.
        </Span>
        <Span spacing="mb-5" fontSize="small" fontColor="gray-600">
          예) Github에서 push한 사람이 ideal6일 때 알림을 받고 싶은 경우,
          [Github_Webhook - Push_User_Name] == 값 [ideal6] 와 같이 설정하면
          된다.
        </Span>
        {/* TODO: 알림 조건 세부 설정 */}
        <NotificationCondition dispatch={dispatch} condition={condition} />
      </div>
    </>
  )
}

export default NotificationSetting
