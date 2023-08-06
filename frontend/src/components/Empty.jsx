import emptyIllus from '../assets/illustration-empty.svg'

const Empty = () => {
  return (
    <div className='max-w-md mx-auto pt-32 hidden'>
      <img src={emptyIllus} alt='' className='mx-auto' />

      <div className='flex flex-col space-y-5 text-center mt-10'>
        <h1 className='font-bold text-2xl'>There is nothing here</h1>
        <p className='text-textGray'>
          Create an invoice by clicking the <br /> <strong>New</strong> Invoice
          button and get started
        </p>
      </div>
    </div>
  )
}

export default Empty
