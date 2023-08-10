import arrowRight from '../assets/icon-arrow-right.svg'

const Invoice = () => {
  return (
    <>
      <div className='flex flex-col space-y-5 md:hidden'>
        <div className='item-container'>
          <div className='flex items-center justify-between'>
            <h1 className='font-bold dark:text-whiteAlt'>
              <span className='text-[#7E88C3]'>#</span>
              RT3080
            </h1>
            <p className='text-textGray dark:text-whiteAlt'>Jesen Huang</p>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <div className='flex flex-col space-y-2'>
              <p className='text-textGray dark:text-whiteAlt'>
                Due 19 Aug 2021
              </p>
              <h1 className='font-bold text-lg dark:text-whiteAlt'>
                $ 1,800.90
              </h1>
            </div>
            <div className='success'>
              <div className='h-2 w-2 rounded-full bg-green'></div>
              <p className='text-green font-bold text-sm'>Paid</p>
            </div>
          </div>
        </div>
        {/* pending */}
        <div className='item-container'>
          <div className='flex items-center justify-between'>
            <h1 className='font-bold dark:text-whiteAlt'>
              <span className='text-[#7E88C3]'>#</span>
              RT3080
            </h1>
            <p className='text-textGray dark:text-whiteAlt'>Jesen Huang</p>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <div className='flex flex-col space-y-2'>
              <p className='text-textGray dark:text-whiteAlt'>
                Due 19 Aug 2021
              </p>
              <h1 className='font-bold text-lg dark:text-whiteAlt'>
                $ 1,800.90
              </h1>
            </div>
            <div className='pending'>
              <div className='h-2 w-2 rounded-full bg-orange'></div>
              <p className='text-orange font-bold text-sm'>Pending</p>
            </div>
          </div>
        </div>
        {/* draft */}
        <div className='item-container'>
          <div className='flex items-center justify-between'>
            <h1 className='font-bold dark:text-whiteAlt'>
              <span className='text-[#7E88C3]'>#</span>
              RT3080
            </h1>
            <p className='text-textGray dark:text-whiteAlt'>Jesen Huang</p>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <div className='flex flex-col space-y-2'>
              <p className='text-textGray dark:text-whiteAlt'>
                Due 19 Aug 2021
              </p>
              <h1 className='font-bold text-lg dark:text-whiteAlt'>
                $ 1,800.90
              </h1>
            </div>
            <div className='draft'>
              <div className='h-2 w-2 rounded-full bg-dark dark:bg-white'></div>
              <p className='text-dark dark:text-whiteAlt font-bold text-sm'>
                Draft
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* md */}
      <div className='md:flex flex-col space-y-5 hidden'>
        <div className='bg-white dark:bg-darkAlt flex items-center justify-between shadow-sm p-6 rounded-lg'>
          <h1 className='font-bold dark:text-whiteAlt'>
            <span className='text-[#7E88C3]'>#</span>
            RT3080
          </h1>
          <p className='text-textGray dark:text-whiteAlt'>Due 19 Aug 2021</p>
          <p className='text-textGray dark:text-whiteAlt'>Jesen Huang</p>
          <h1 className='font-bold text-lg dark:text-whiteAlt'>$ 1,800.90</h1>
          <div className='flex items-center space-x-5'>
            <div className='success'>
              <div className='h-2 w-2 rounded-full bg-green'></div>
              <p className='text-green font-bold text-sm'>Paid</p>
            </div>
            <span>
              <img src={arrowRight} alt='' />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Invoice
