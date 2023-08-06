import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BackButton from '../components/BackButton'

const InvoiceDetails = () => {
  return (
    <div className='bg-bodyBg dark:bg-darkBodyBg'>
      <Header />
      <Sidebar />
      <main className='max-w-3xl mx-auto px-6 py-10 min-h-screen'>
        <BackButton />
        {/* Header */}
        <div className='flex items-center justify-between bg-white dark:bg-darkAlt shadow-sm p-6 rounded-lg mt-8'>
          <div className='flex items-center justify-between w-full md:w-1/4'>
            <p className='text-textGray dark:text-whiteAlt'>Status</p>
            <div className='success'>
              <div className='h-2 w-2 rounded-full bg-green'></div>
              <p className='text-green font-bold text-sm'>Paid</p>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <button className='font-bold bg-[#F9FAFE] dark:text-white dark:bg-[#252945] px-5 py-3 rounded-full text-sm'>
              Edit
            </button>
            <button className='font-bold bg-red text-white text-sm px-5 py-3 rounded-full'>
              Delete
            </button>
            <button className='font-bold bg-purple text-white text-sm px-5 py-3 rounded-full'>
              Mark as Paid
            </button>
          </div>
        </div>
        {/* body  */}
      </main>
    </div>
  )
}

export default InvoiceDetails
