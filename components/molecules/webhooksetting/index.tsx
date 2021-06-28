/* eslint-disable no-console */
import cn from 'classnames'
import { useCallback, useState } from 'react'
import Webhook from '../../../types/webhook'
import Input from '../../atoms/input'
import ListBox from '../../atoms/listbox'
import Modal from '../../atoms/modal'
import Span from '../../atoms/span'
import CopyInput from '../copyinput'
import Table from '../table'

interface WebhookSettingProps {
  webhook: Webhook
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
  description: string
  field: string
}

interface WebhookFieldType {
  name: string
  description: string
  field: string
}

const fieldTypePreset: Record<string, WebhookFieldType[]> = {
  github: [
    {
      name: 'Repository Name',
      description: '리포지토리 이름',
      field: '.repository.name',
    },
    {
      name: 'Push User Name',
      description: '커밋을 푸시한 유저의 이름',
      field: '.pusher.name',
    },
    {
      name: 'Push User Email',
      description: '커밋을 푸시한 유저의 이메일 주소',
      field: '.pusher.email',
    },
  ],
}

const WebhookSetting: React.FC<WebhookSettingProps> = ({
  webhook,
  dispatch,
}) => {
  const [modalStatus, setModalStatus] = useState<ModalStatus>(
    ModalStatus.CLOSED
  )
  const [modalFormData, setModalFormData] = useState<ModalFormData>({
    name: '',
    description: '',
    field: '',
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
  const onAddFormConfirm = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _, idx: __, ...addfieldData } = modalFormData
    dispatch({ type: 'fields', payload: [...webhook.fields, addfieldData] })
    setModalStatus(ModalStatus.CLOSED)
  }, [modalFormData, webhook])

  const onModifyFormConfirm = useCallback(() => {
    const { idx = 0, ...modifyFieldData } = modalFormData
    dispatch({
      type: 'fields',
      payload: webhook.fields.map((field, mIdx) =>
        mIdx !== idx ? field : modifyFieldData
      ),
    })
    setModalStatus(ModalStatus.CLOSED)
  }, [modalFormData, webhook])

  const onModifyFormDelete = useCallback(() => {
    const { idx = 0 } = modalFormData
    dispatch({
      type: 'fields',
      payload: webhook.fields.filter((_, fIdx) => fIdx !== idx),
    })
    setModalStatus(ModalStatus.CLOSED)
  }, [modalFormData, webhook])

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
          onChange={(data: string) => {
            dispatch({ type: 'type', payload: data })
            dispatch({ type: 'fields', payload: fieldTypePreset[data] ?? [] })
          }}
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
        <Table
          title={['이름', '설명', '필드 위치']}
          content={webhook.fields}
          addDataField={() => {
            setModalFormData({ field: '', name: '', description: '' })
            setModalStatus(ModalStatus.ADD)
          }}
          modifyDataField={(idx) => () => {
            setModalFormData({ ...webhook.fields[idx], idx })
            setModalStatus(ModalStatus.MODIFY)
          }}
          columns={['name', 'description', 'field']}
        />
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
                ? '데이터 필드 추가'
                : '데이터 필드 수정'}
            </Span>
            <div className={cn('flex flex-col')}>
              <label
                htmlFor="field-name"
                className={cn('text-base font-bold text-gray-800')}
              >
                이름
              </label>
              <Input
                type="text"
                id="field-name"
                name="field-name"
                spacing="mt-2 mb-6"
                size="normal"
                placeholder="필드 이름을 입력해주세요"
                value={modalFormData.name}
                onChange={onFormInputChange}
              />
            </div>
            <div className={cn('flex flex-col')}>
              <label
                htmlFor="description"
                className={cn('text-base font-bold text-gray-800')}
              >
                설명
              </label>
              <Input
                type="text"
                id="description"
                name="description"
                spacing="mt-2 mb-6"
                size="big"
                placeholder="필드에 대한 설명을 입력해주세요"
                value={modalFormData.description}
                onChange={onFormInputChange}
              />
            </div>
            <div className={cn('flex flex-col')}>
              <label
                htmlFor="description"
                className={cn('text-base font-bold text-gray-800')}
              >
                필드 위치
              </label>
              <Span spacing="mt-2 mb-1" fontSize="small" fontColor="gray-600">
                {
                  '필드의 시작은 "."으로 시작하며, 원하는 하위 필드에 진입하려면 "."을 사용합니다.'
                }
              </Span>
              <Span spacing="mb-3" fontSize="small" fontColor="gray-600">
                {'예) 사용자 이름: ".user.name"'}
              </Span>
              <Input
                type="text"
                id="field"
                name="field"
                spacing="mb-3"
                size="big"
                placeholder="필드 위치를 입력해주세요. 예) .user.name"
                value={modalFormData.field}
                onChange={onFormInputChange}
              />
            </div>
          </div>
        </Modal>
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
          아래 링크에 HTTP POST 방식으로 웹훅을 보내도록 설정하세요.
        </Span>
        <CopyInput
          text={webhook.id && `http://ideal6.kr:3000/webhooks/w/${webhook.id}`}
          placeholder="(웹훅을 생성하면 링크가
          생성됩니다.)"
        />
      </div>
    </>
  )
}

const serviceOptions = [
  'custom',
  'github',
  'discord',
  'google_calendar',
  'google_drive',
  'slack',
  'telegram',
]

export default WebhookSetting
