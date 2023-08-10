import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BackButton from '../components/BackButton'

const InvoiceCreate = () => {
  return (
    <div className='bg-bodyBg dark:bg-darkBodyBg'>
      <Header />
      <Sidebar />
      <main className='max-w-3xl mx-auto px-6 py-10 min-h-screen pb-32'>
        <BackButton url={'/'} />
        {/* title */}
        <h1 className='text-xl font-bold my-8'>New Invoice</h1>

        {/* form */}
        <form className='md:hidden'>
          <div>
            <h1 className='font-bold text-purple mb-7'>Bill From</h1>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Street Address
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div className='flex items-center justify-between space-x-5'>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm'>
                    City
                  </label>
                  <input
                    type='text'
                    className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm'>
                    Postal Code
                  </label>
                  <input
                    type='text'
                    className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Country
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='font-bold text-purple mb-7'>Bill To</h1>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Client's Name
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Client's Email
                </label>
                <input
                  type='email'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Street Address
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div className='flex items-center justify-between space-x-5'>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm'>
                    City
                  </label>
                  <input
                    type='text'
                    className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm'>
                    Postal Code
                  </label>
                  <input
                    type='text'
                    className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Country
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Invoice Date
                </label>
                <input
                  type='date'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Payment Terms
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm'>
                  Project Description
                </label>
                <input
                  type='text'
                  className='block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
            </div>
          </div>
        </form>
      </main>
      {/* footer */}
      <div className='item-container fixed left-0 right-0 bottom-0 flex items-center justify-center mt-8 md:hidden'>
        <div className='md:hidden flex items-center space-x-4'>
          <button className='btn bg-[#F9FAFE] text-black dark:text-white dark:bg-[#252945] '>
            Edit
          </button>
          <button className='btn bg-red text-white'>Delete</button>
          <button className='btn bg-purple text-white'>Mark as Paid</button>
        </div>
      </div>
    </div>
  )
}

export default InvoiceCreate
