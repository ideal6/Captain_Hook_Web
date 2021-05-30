import Head from 'next/head'
import Box from '../../components/atoms/box'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'
import ListBox from '../../components/atoms/listbox'
import Span from '../../components/atoms/span'
import NotificationItem from '../../components/molecules/notificationitem'

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
      ></Button>
      <br />
      <br />
      <br />
      <Input
        type="email"
        id="noti_email"
        name="noti_name"
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

export default Notifications
