import Head from 'next/head'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'

const Notifications: React.FC = () => {
  return (
    <div>
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
        list={{ id: 'Hello', options: ['hello', 'world', 'kkul'] }}
        size="normal"
      ></Input>
    </div>
  )
}

export default Notifications
