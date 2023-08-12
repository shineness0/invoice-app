import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BackButton from '../components/BackButton'
import trashIcon from '../assets/icon-delete.svg'
import plusIcon from '../assets/icon-plus.svg'

const InvoiceCreate = () => {
  return (
    <div className='bg-bodyBg dark:bg-darkBodyBg'>
      <Header />
      <Sidebar />
      <main className='max-w-3xl mx-auto px-6 py-10 min-h-screen pb-32'>
        <BackButton url={'/'} />
        {/* title */}
        <h1 className='text-xl font-bold my-8 dark:text-white'>New Invoice</h1>

        {/* form */}
        <form className='md:hidden mb-20'>
          <div>
            <h1 className='font-bold text-purple mb-7'>Bill From</h1>
            <div className='space-y-5'>
              <div>
                <label
                  className='font-medium text-textGrayAlt text-sm dark:text-textGray
                '
                >
                  Street Address
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div className='flex items-center justify-between space-x-5'>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    City
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Postal Code
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Country
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <h1 className='font-bold text-purple mb-7'>Bill To</h1>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Client's Name
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Client's Email
                </label>
                <input
                  type='email'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Street Address
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div className='flex items-center justify-between space-x-5'>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    City
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Postal Code
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Country
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Invoice Date
                </label>
                <input
                  type='date'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Payment Terms
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Project Description
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>
            </div>
          </div>
          {/* Item List */}
          <div className='mt-16 space-y-10'>
            <h1 className='font-bold text-[#777F98] text-xl mb-0'>Item List</h1>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Item Name
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>

              <div className='flex items-center space-x-5'>
                <div className='w-1/4'>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Qty.
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div className='w-1/4'>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Price
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div className='w-1/4'>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Total
                  </label>
                  <h1 className='text-textGray font-bold'>$ 156.00</h1>
                </div>
                <button>
                  <img src={trashIcon} alt='' className='mt-5' />
                </button>
              </div>
            </div>
            <div className='space-y-5'>
              <div>
                <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                  Item Name
                </label>
                <input
                  type='text'
                  className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                />
              </div>

              <div className='flex items-center space-x-5'>
                <div className='w-1/4'>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Qty.
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div className='w-1/4'>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Price
                  </label>
                  <input
                    type='text'
                    className='dark:bg-darkAlt dark:border-dark2 dark:text-white block w-full border border-whiteAlt focus:outline-none px-3 py-2 rounded font-bold text-sm'
                  />
                </div>
                <div className='w-1/4'>
                  <label className='font-medium text-textGrayAlt text-sm dark:text-textGray'>
                    Total
                  </label>
                  <h1 className='text-textGray font-bold'>$ 156.00</h1>
                </div>
                <button>
                  <img src={trashIcon} alt='' className='mt-5' />
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Button */}
        <div className='flex justify-center bg-[#F9FAFE] rounded-full py-3 md:hidden dark:bg-dark2'>
          <button className=' text-textGrayAlt font-bold flex items-center'>
            <span className='mr-2 font-bold text-2xl'>+</span>
            Add New Item
          </button>
        </div>
      </main>
      {/* footer */}
      <div className='item-container fixed left-0 right-0 bottom-0 flex items-center justify-center mt-8 md:hidden'>
        <div className='md:hidden flex items-center space-x-4'>
          <button className='btn bg-[#F9FAFE] text-textGrayAlt dark:text-white dark:bg-[#252945] '>
            Discard
          </button>
          <button className='btn bg-dark text-textGray'>Save as Draft</button>
          <button className='btn bg-purple text-white'>Save and Send</button>
        </div>
      </div>
    </div>
  )
}

export default InvoiceCreate
