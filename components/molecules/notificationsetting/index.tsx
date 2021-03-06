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
      {/* 1. ?????? ?????? */}
      <div className={cn('flex flex-col mt-6 mb-2')}>
        <label
          htmlFor="noti-name"
          className={cn('text-base font-bold text-gray-800')}
        >
          ?????????
        </label>
        <Input
          type="text"
          id="noti-name"
          name="noti-name"
          spacing="mt-2 mb-4"
          size="normal"
          placeholder="???????????? ??????????????????"
          value={notification.name}
          onChange={(e) =>
            dispatch({ type: 'name', payload: e.currentTarget.value })
          }
        />
      </div>

      {/* 2. ?????? ????????? ?????? */}
      <div className={cn('flex flex-col mt-4 mb-8')}>
        <Span
          spacing="mb-2"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          ?????? ????????? ??????
        </Span>
        <Span spacing="mb-4" fontSize="small" fontColor="gray-600">
          {
            '"+" ????????? ????????? ???????????? ?????? ????????? ??? ?????? ?????? ?????? ???????????? ????????? ???, ?????????, KEY ??? ?????? ????????? ??????????????????.'
          }
        </Span>

        <Table
          title={['??????', '??????', 'KEY']}
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
        {/* ?????? ?????? */}
        <Modal
          isOpen={modalStatus !== ModalStatus.CLOSED}
          leftText={modalStatus === ModalStatus.ADD ? '??????' : '??????'}
          rightText={modalStatus === ModalStatus.ADD ? '??????' : '??????'}
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
                ? '?????? ????????? ??????'
                : '?????? ????????? ??????'}
            </Span>
            <div className={cn('flex flex-col')}>
              <label
                htmlFor="name"
                className={cn('text-base font-bold text-gray-800')}
              >
                ?????? ????????????
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                spacing="mt-2 mb-6"
                size="normal"
                placeholder="?????? ??????????????? ??????????????????"
                value={modalFormData.name}
                onChange={onFormInputChange}
              />
            </div>
            <div className={cn('flex flex-col mb-6')}>
              <label
                htmlFor="description"
                className={cn('text-base font-bold text-gray-800')}
              >
                ?????? ????????? ??????
              </label>
              <ListBox
                placeholder="?????? ??????"
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
                SMS??? 010-XXXX-XXX ??????, Email??? ????????? ??????, ???????????? ?????????
                ????????? ????????????.
              </Span>
              <Input
                type="text"
                id="key"
                name="key"
                spacing="mb-6"
                size="big"
                placeholder={
                  modalFormData.type === 'telegram'
                    ? '????????? ???????????? ?????? ???????????? ???????????????.'
                    : 'KEY ?????? ??????????????????'
                }
                value={
                  modalFormData.type === 'telegram' ? '' : modalFormData.key
                }
                onChange={onFormInputChange}
              />
            </div>
          </div>
        </Modal>
      </div>

      {/* 3. ?????? ?????? ?????? */}
      <div className={cn('flex flex-col mt-4 mb-10')}>
        <Span
          spacing="mb-2"
          fontSize="big"
          fontColor="gray-800"
          fontWeight="bold"
        >
          ?????? ?????? ??????
        </Span>
        <Span spacing="mb-2" fontSize="small" fontColor="gray-600">
          ???????????? ?????? ????????? ?????? ???????????? ????????? ????????? ????????????, ?????? ?????????
          ??????????????????.
        </Span>
        <Span spacing="mb-5" fontSize="small" fontColor="gray-600">
          ???) Github?????? push??? ????????? ideal6??? ??? ????????? ?????? ?????? ??????,
          [Github_Webhook - Push_User_Name] == ??? [ideal6] ??? ?????? ????????????
          ??????.
        </Span>
        {/* TODO: ?????? ?????? ?????? ?????? */}
        <NotificationCondition dispatch={dispatch} condition={condition} />
      </div>
    </>
  )
}

export default NotificationSetting
