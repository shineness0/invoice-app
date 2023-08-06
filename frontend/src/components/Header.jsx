import Logo from '../assets/logo.svg'
import Moon from '../assets/icon-moon.svg'
import Avatar from '../assets/image-avatar.jpg'

const Header = () => {
  return (
    <>
      <nav className='bg-dark flex  top-0 left-0 lg:hidden'>
        <div className='flex items-center justify-between pr-5 border-gray border-r-2 w-4/5'>
          <img src={Logo} alt='' />
          <img src={Moon} alt='' className='cursor-pointer' />
        </div>
        <div className='flex items-center justify-center mx-auto'>
          <img src={Avatar} alt='' className='h-10 w-10 rounded-full' />
        </div>
      </nav>
    </>
  )
}

export default Header
