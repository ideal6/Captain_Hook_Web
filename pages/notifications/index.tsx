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
        size="normal"
        fontSize="normal"
        fontColor="#FFFFFF"
        backgroundColor="#000000"
      ></Button>
    </div>
  )
}

export default Notifications
