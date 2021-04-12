import { useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='flex justify-between items-center w-full p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
          </svg>

          <Avatar url='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' />
        </div>
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          width={300}
          height={100}
        />

        <div className='flex items-center w-full max-w-md mt-5 hover:shadow-lg focus-within:shadow-lg border border-gray-200 rounded-full px-5 py-3 sm:max-w-xl lg:max-w-2xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-3 text-gray-500'
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
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow focus:outline-none'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
