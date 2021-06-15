import Head from 'next/head'
import Box from '../../components/atoms/box'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'
import ListBox from '../../components/atoms/listbox'
import Span from '../../components/atoms/span'
import NotificationItem from '../../components/molecules/notificationitem'
import Table from '../../components/molecules/table'

const Notifications: React.FC = () => {
  return (
    <Box
      width="1920"
      height="720"
      spacing="p-3"
      backgroundColor="white"
      hasShadow={true}
    >
      {' '}
      <Head>
        <title>Notifications</title>
      </Head>
      <Button
        type="button"
        text="Notifications Page"
        size="big"
        fontSize="normal"
        fontColor="white"
        backgroundColor="primary"
        // eslint-disable-next-line no-console
        onClickHandler={(e) => console.log(e)}
      ></Button>
      <br />
      <br />
      <br />
      <Input
        type="email"
        id="noti_email"
        name="noti_name"
        spacing=""
        placeholder={'Notification Page'}
        size="normal"
      ></Input>
      <br />
      <br />
      <br />
      <ListBox
        label={'Oink Oink'}
        placeholder={'Select Item'}
        options={[
          'Hello',
          'EveryOne',
          'My name is',
          'Jack',
          'And',
          "I'm",
          'Pig',
        ]}
        size={'normal'}
        labelSize={'big'}
      />
      <br />
      <Span
        text="Oink Oink"
        fontSize="normal"
        fontColor="primary"
        fontWeight="bold"
      />
      <br />
      {items.map(({ name, recentDate, webhookId, notificationId }, idx) => (
        <NotificationItem
          key={idx}
          name={name}
          recentDate={recentDate}
          webhookId={webhookId}
          notificationId={notificationId}
        />
      ))}
      <br />
      <br />
      <br />
      <Table title={['이름', '종류', 'KEY']} content={tableItems}></Table>
      <br />
      <br />
      <br />
    </Box>
  )
}

const items = [
  {
    name: 'Notification 1',
    recentDate: new Date(),
    webhookId: ['google_calendar'],
    notificationId: ['gmail', 'telegram', 'discord'],
  },
  {
    name: 'Notification 2',
    recentDate: new Date(),
    webhookId: ['github', 'google_drive'],
    notificationId: ['slack', 'discord'],
  },
]

const tableItems = [
  {
    name: '조예승의 텔레그램',
    type: '텔레그램',
    key: '1',
  },
  {
    name: '조예승의 슬랙',
    type: '슬랙',
    key: '2',
  },
  {
    name: '조예승의 지메일',
    type: '지메일',
    key: '3',
  },
  {
    name: '조예승의 디스코드',
    type: '디스코드',
    key: '4',
  },
]

export default Notifications
