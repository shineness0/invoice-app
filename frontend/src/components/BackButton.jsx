import { Link } from 'react-router-dom'
import arrowLeft from '../assets/icon-arrow-left.svg'

const BackButton = ({ url }) => {
  return (
    <Link to={url} className='flex items-center space-x-4 dark:text-whiteAlt'>
      <span>
        <img src={arrowLeft} alt='' />
      </span>
      <strong>Go Back</strong>
    </Link>
  )
}

export default BackButton
