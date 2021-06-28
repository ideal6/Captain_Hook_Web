import { useEffect, useState } from 'react'
import Webhook from '../../../types/webhook'
import { getApiClient } from '../../../utils/getApiClient'
import ListBox2 from '../../atoms/listbox2'
import Input from '../../atoms/input'
import cn from 'classnames'
import Span from '../../atoms/span'

interface NotificationConditionProps {
  dispatch: any
  condition?: Condition
}

interface Condition {
  left: string
  center: string
  right: string
}
const NotificationCondition: React.FC<NotificationConditionProps> = ({
  dispatch,
  condition: _condition,
}) => {
  const [webhooks, setWebhooks] = useState<Webhook[]>(null)
  const [referenceOptions, setReferenceOptions] = useState<
    { label: string; value: string }[]
  >(null)
  const [condition, setCondition] = useState<Condition>(_condition)
  useEffect(() => {
    dispatch({
      type: 'condition',
      payload: `${condition.left}|${condition.center}|${condition.right}`,
    })
  }, [condition])

  useEffect(() => {
    getApiClient()
      .get('/webhooks')
      .then(({ data }) => {
        setWebhooks(data)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (!webhooks) return
    const options = webhooks
      .map((webhook) =>
        webhook.fields.map((field) => ({
          label: `${webhook.name} - ${field.name}`,
          value: `${field.id}`,
        }))
      )
      .reduce((p, c) => [...p, ...c], [])
    setReferenceOptions([{ label: '값', value: 'value' }, ...options])
  }, [webhooks])
  return (
    webhooks &&
    referenceOptions && (
      <div className={cn('flex gap-4 flex-wrap content-around')}>
        <div>
          <Span
            spacing="mb-2"
            fontSize="normal"
            fontColor="gray-800"
            fontWeight="bold"
          >
            참조 종류
          </Span>
          <ListBox2
            options={referenceOptions}
            size="normal"
            initialValue={
              condition.left.startsWith('&')
                ? referenceOptions.find(
                    (op) => op.value === condition.left.substr(1)
                  ) || referenceOptions[0]
                : referenceOptions[0]
            }
            onChange={(value) =>
              setCondition((prev) => ({
                ...prev,
                left: value.value !== 'value' ? `&${value.value}` : '$',
              }))
            }
          />
        </div>

        {condition.left.startsWith('$') && (
          <div className={cn('flex flex-col')}>
            <Span
              spacing="mb-2"
              fontSize="normal"
              fontColor="gray-800"
              fontWeight="bold"
            >
              값(문자열, 숫자)
            </Span>
            <Input
              type="text"
              id="left"
              name="left"
              placeholder="값을 입력해주세요"
              spacing="mt-0.5"
              size="small"
              value={condition.left.substr(1)}
              onChange={(e) => {
                setCondition((prev) => ({
                  ...prev,
                  left: `$${e.target.value}`,
                }))
              }}
            />
          </div>
        )}
        <div>
          <Span
            spacing="mb-2"
            fontSize="normal"
            fontColor="gray-800"
            fontWeight="bold"
          >
            조건
          </Span>
          <ListBox2
            options={[
              { label: '==', value: '==' },
              { label: '<', value: '<' },
              { label: '<=', value: '<=' },
              { label: '>', value: '>' },
              { label: '>=', value: '>=' },
              { label: '!=', value: '!=' },
            ]}
            size="normal"
            initialValue={{ label: condition.center, value: condition.center }}
            onChange={(value) =>
              setCondition((prev) => ({ ...prev, center: value.value }))
            }
          />
        </div>
        <div>
          <Span
            spacing="mb-2"
            fontSize="normal"
            fontColor="gray-800"
            fontWeight="bold"
          >
            참조 종류
          </Span>
          <ListBox2
            options={referenceOptions}
            size="normal"
            initialValue={
              condition.right.startsWith('&')
                ? referenceOptions.find(
                    (op) => op.value === condition.right.substr(1)
                  ) || referenceOptions[0]
                : referenceOptions[0]
            }
            onChange={(value) =>
              setCondition((prev) => ({
                ...prev,
                right: value.value !== 'value' ? `&${value.value}` : '$',
              }))
            }
          />
        </div>
        {condition.right.startsWith('$') && (
          <div className={cn('flex flex-col')}>
            <Span
              spacing="mb-2"
              fontSize="normal"
              fontColor="gray-800"
              fontWeight="bold"
            >
              값(문자열, 숫자)
            </Span>
            <Input
              type="text"
              id="left"
              name="left"
              placeholder="값을 입력해주세요"
              spacing="mt-0.5"
              value={condition.right.substr(1)}
              size="small"
              onChange={(e) => {
                setCondition((prev) => ({
                  ...prev,
                  right: `$${e.target.value}`,
                }))
              }}
            />
          </div>
        )}
      </div>
    )
  )
}

export default NotificationCondition
