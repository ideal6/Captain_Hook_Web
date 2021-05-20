import cn from 'classnames'
import Head from 'next/head'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'
import ListBox from '../../components/atoms/listbox'

const Notifications: React.FC = () => {
  return (
    <div className={cn('ml-2')}>
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
      ></ListBox>
    </div>
  )
}

export default Notifications
