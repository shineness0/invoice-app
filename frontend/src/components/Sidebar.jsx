import Logo from '../assets/logo.svg'
import Moon from '../assets/icon-moon.svg'
import Avatar from '../assets/image-avatar.jpg'

const Sidebar = () => {
  return (
    <>
      <aside className='bg-dark fixed top-0 left-0 bottom-0 rounded-r-3xl  hidden lg:block'>
        <div className='flex flex-col items-center justify-between pb-5 border-gray border-b-2 h-5/6'>
          <div>
            <img src={Logo} alt='' />
          </div>
          <div>
            <img src={Moon} alt='' className='cursor-pointer' />
          </div>
        </div>
        <div className='h-1/6 flex flex-col justify-center items-center'>
          <img src={Avatar} alt='' className='h-10 w-10 rounded-full' />
        </div>
      </aside>
    </>
  )
}

export default Sidebar
