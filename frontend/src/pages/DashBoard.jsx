import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Top from '../components/Top'
import Emty from '../components/Empty'
import Invoice from '../components/Invoice'

const DashBoard = () => {
  return (
    <div className='bg-bodyBg dark:bg-darkBodyBg'>
      <Header />
      <Sidebar />
      <main className='max-w-3xl mx-auto px-6 py-10 min-h-screen'>
        <Top />
        <Emty />
        <Invoice />
      </main>
    </div>
  )
}

export default DashBoard
