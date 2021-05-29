import Head from 'next/head'
import Box from '../../components/atoms/box'
import Button from '../../components/atoms/button'
import Input from '../../components/atoms/input'
import ListBox from '../../components/atoms/listbox'
import Span from '../../components/atoms/span'

const ChildComponent: React.FC = () => {
  return (
    <>
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
    </>
  )
}

const Notifications: React.FC = () => {
  return (
    <Box
      width="96"
      height="96"
      spacing="p-3"
      backgroundColor="white"
      hasShadow={true}
      childComponent={<ChildComponent />}
    ></Box>
  )
}

export default Notifications
