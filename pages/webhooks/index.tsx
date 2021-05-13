import Head from 'next/head'
import Button from '../../components/atoms/button'

const Webhooks: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Webhooks</title>
      </Head>
      <Button
        type="button"
        text="Webhooks Page"
        size="normal"
        fontColor="#FFFFFF"
        backgroundColor="#000000"
      ></Button>
    </div>
  )
}

export default Webhooks
