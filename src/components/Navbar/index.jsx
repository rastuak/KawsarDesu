import Link from 'next/link'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <header className="fixed w-screen top-0 z-10 opacity-80 bg-paletKuning-coba px-8 shadow-lg">
      <div className='flex sm:flex-row flex-col justify-between md:items-center'>
        <Link href="/" 
              className='text-2xl font-bold text-white self-center'
              >KawsarDesu
        </Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar