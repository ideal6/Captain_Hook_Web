import cn from 'classnames'
import AppBar from '../../components/organisms/appbar'
import NotificationList from '../../components/organisms/notificationlist'
import SideBar from '../../components/organisms/sidebar'

const Notifications: React.FC = () => {
  return (
    <>
      <AppBar />
      <div className={cn('flex flex-row h-full bg-gray-100')}>
        <SideBar />
        <NotificationList spacing="flex-shrink flex-grow m-4 mb-24" />
      </div>
    </>
  )
}

{
  /* <Table title={['이름', '종류', 'KEY']} content={tableItems}></Table>

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
] */
}

export default Notifications
