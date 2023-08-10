import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BackButton from '../components/BackButton'

const InvoiceDetails = () => {
  return (
    <div className='bg-bodyBg dark:bg-darkBodyBg'>
      <Header />
      <Sidebar />
      <main className='max-w-3xl mx-auto px-6 py-10 min-h-screen'>
        <BackButton url={'/'} />
        {/* Header */}
        <div className='item-container flex items-center justify-between mt-8'>
          <div className='flex items-center justify-between w-full md:w-1/4'>
            <p className='text-textGray dark:text-whiteAlt font-medium'>
              Status
            </p>
            <div className='success'>
              <div className='h-2 w-2 rounded-full bg-green'></div>
              <p className='text-green font-bold text-sm'>Paid</p>
            </div>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <button className='btn bg-[#F9FAFE] text-black dark:text-white dark:bg-[#252945] '>
              Edit
            </button>
            <button className='btn bg-red text-white'>Delete</button>
            <button className='btn bg-purple text-white'>Mark as Paid</button>
          </div>
        </div>
        {/* body  */}
        <div className='item-container mt-6 mb-16'>
          <div className='flex flex-col space-y-8'>
            {/* item 1 */}
            <div className='flex flex-col space-y-7 md:flex-row md:items-center md:justify-between'>
              <div>
                <h1 className='font-bold dark:text-whiteAlt'>
                  <span className='text-[#7E88C3]'>#</span>
                  RT3080
                </h1>
                <p className='text-textGrayAlt dark:text-whiteAlt text-sm mt-2 font-medium'>
                  Graphic Design
                </p>
              </div>
              {/* details */}
              <div className='flex flex-col space-y-1'>
                <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                  19 Union Terrace
                </p>
                <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium md:text-end'>
                  London
                </p>
                <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium md:text-end'>
                  E1 3EZ
                </p>
                <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                  United Kingdom
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className='flex flex-col max-w-xl md:flex-row md:justify-between'>
              {/* one */}
              <div className='flex items-center justify-between md:w-1/2'>
                <div>
                  <div>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      Invoice Date
                    </p>
                    <h1 className='font-bold mt-3 dark:text-white'>
                      21 Aug 2021
                    </h1>
                  </div>
                  <div className='mt-4'>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      Payment Due
                    </p>
                    <h1 className='font-bold mt-3 dark:text-white'>
                      20 Sep 2021
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      Bill To
                    </p>
                    <h1 className='font-bold mt-3 dark:text-white'>
                      Alex Grim
                    </h1>
                  </div>
                  <div className='mt-1'>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      84 Church Way
                    </p>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      Bradford
                    </p>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      BD1 9PB
                    </p>
                    <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
              {/* two */}
              <div className='mt-3 md:mt-0'>
                <div>
                  <p className='text-textGrayAlt dark:text-whiteAlt text-sm font-medium'>
                    Sent to
                  </p>
                  <h1 className='font-bold mt-3 dark:text-white'>
                    Alexgrim@mail.com
                  </h1>
                </div>
              </div>
            </div>
            {/* item 3 */}
            <div>
              <div className='bg-[#F9FAFE] dark:bg-[#252945] p-5 rounded-t'>
                {/* mobile */}
                <div className='flex flex-col space-y-5 md:hidden'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h1 className='font-bold dark:text-white mb-2'>
                        Banner Design
                      </h1>
                      <p className='font-bold text-textGrayAlt dark:text-whiteAlt'>
                        1 x $ 156.00
                      </p>
                    </div>
                    <h1 className='font-bold dark:text-white mb-2'>$ 156.00</h1>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h1 className='font-bold dark:text-white mb-2'>
                        Email Design
                      </h1>
                      <p className='font-bold text-textGrayAlt dark:text-whiteAlt'>
                        2 x $ 200.00
                      </p>
                    </div>
                    <h1 className='font-bold dark:text-white mb-2'>$ 400.00</h1>
                  </div>
                </div>
                {/* Desktop */}
                <div className='hidden md:table w-full ...'>
                  <div className='table-header-group ...'>
                    <div className='table-row text-whiteAlt'>
                      <div className='table-cell text-left ...'>Item Name</div>
                      <div className='table-cell text-left ...'>QTY</div>
                      <div className='table-cell text-left ...'>Price</div>
                      <div className='table-cell text-left ...'>Total</div>
                    </div>
                  </div>
                  <div className='table-row-group font-bold'>
                    <div className='table-row text-white'>
                      <div className='table-cell py-3'>Banner Design</div>
                      <div className='table-cell py-3'>1</div>
                      <div className='table-cell py-3'>$ 156.00</div>
                      <div className='table-cell py-3'>$ 156.00</div>
                    </div>
                    <div className='table-row text-white'>
                      <div className='table-cell py-3'>Email Design</div>
                      <div className='table-cell py-3'>2</div>
                      <div className='table-cell py-3'>$ 200.00</div>
                      <div className='table-cell py-3'>$ 400.00</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* total */}
              <div className='bg-dark dark:bg-[#0C0E16] py-10 px-5 flex items-center justify-between rounded-b-lg text-white font-'>
                <p className='font-medium '>Grand Total</p>
                <h1 className='font-bold text-lg'>$ 556.00</h1>
              </div>
            </div>
          </div>
        </div>
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
      </main>
    </div>
  )
}

export default InvoiceDetails
