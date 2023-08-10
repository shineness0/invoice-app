import { Link } from 'react-router-dom'
import arrowDown from '../assets/icon-arrow-down.svg'
import plusIcon from '../assets/icon-plus.svg'

const Top = () => {
  return (
    <div className='flex items-center justify-between mb-10 dark:text-whiteAlt'>
      {/* Item 1 */}
      <div>
        <h1 className='font-bold text-2xl dark:text-whiteAlt'>Invoices</h1>
        <p className='text-textGray font-normal'>No Invoices</p>
      </div>
      {/* Item 2 */}
      <div className='flex items-center space-x-4 md:hidden'>
        <div className='flex items-center space-x-3'>
          <h1 className='font-bold text-lg'>Filter</h1>
          <span className='cursor-pointer'>
            <img src={arrowDown} alt='' />
          </span>
        </div>
        {/* Button */}
        <Link
          to='/invoice/edit'
          className='bg-purple flex items-center space-x-2 px-3 py-2 rounded-full'
        >
          <span>
            <img src={plusIcon} alt='' />
          </span>
          <h1 className='text-white font-bold text-lg'>New</h1>
        </Link>
      </div>
      {/* md */}
      <div className='md:flex items-center space-x-4 hidden'>
        <div className='flex items-center space-x-3'>
          <h1 className='font-bold text-lg'>Filter by status</h1>
          <span className='cursor-pointer'>
            <img src={arrowDown} alt='' />
          </span>
        </div>
        {/* Button */}
        <Link
          to='/invoice/edit'
          className='bg-purple flex items-center space-x-2 px-3 py-2 rounded-full'
        >
          <span>
            <img src={plusIcon} alt='' />
          </span>
          <h1 className='text-white font-bold text-lg'>New Invoice</h1>
        </Link>
      </div>
    </div>
  )
}

export default Top
