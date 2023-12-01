import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

export default function NavBar() {
    const buttonStyle = 'font-bold px-5 py-1 uppercase border-2 border-[#000000] rounded-3xl'
  return (
    <nav className='bg-[#ffc700] text-black py-4 flex justify-around items-center'>
        <div className='flex justify-between gap-3'>
            <Link href="/" className={buttonStyle}>Shop</Link>
            <Link href="/about" className={buttonStyle}>About</Link>
            <button className='ml-4'>
              <FaSearch />
            </button>
        </div>
        <h1 className='uppercase font-bold text-2xl'>The store</h1>
        <div className='flex justify-between gap-4'>
            <button className={buttonStyle + ' flex items-center'}>
              United States <FaAngleDown className='ml-10' />
            </button>
            <button className={buttonStyle}>Cart {0}</button>
        </div>
    </nav>
  )
}