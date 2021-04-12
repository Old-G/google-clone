const Footer = () => {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500'>
      <div className='p-8 py-3'>
        <p>Canada</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3'>
        <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-1 text-gray-700'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
              clipRule='evenodd'
            />
          </svg>
          Carbon neutral since 2007
        </div>
        <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
          <p>Advertising</p>
          <p>Business</p>
          <p>How search works</p>
        </div>
        <div className='flex justify-center space-x-8 md:ml-auto'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
