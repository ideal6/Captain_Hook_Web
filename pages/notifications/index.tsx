import Head from 'next/head'
import Button from '../../components/atoms/button'

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
    </div>
  )
}

export default Notifications
