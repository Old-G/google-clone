import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from '../Avatar'
import HeaderOptions from '../HeaderOptions'

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          width={120}
          height={40}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
          <input
            ref={searchInputRef}
            type='text'
            className=' flex-row w-full focus:outline-none'
            defaultValue={router.query.term}
          />
          <svg
            onClick={() => (searchInputRef.current.value = '')}
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z'
              clipRule='evenodd'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 text-blue-500 hidden sm:inline-flex'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className='ml-auto'
          url='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
        />
      </div>
      <HeaderOptions />
    </header>
  )
}

export default Header
