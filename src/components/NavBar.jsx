'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { FaSearch, FaStream } from "react-icons/fa";
import { FaAngleDown, FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { HandleShoppingCart } from '@/context/ShoppingCartContext';

export default function NavBar() {
  let { setIsOpen, ShopCartProducts } = useContext(HandleShoppingCart);

  const router = useRouter()

  const [navMobile, setNavMobile] = useState(false)
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [searchBarValue, setSearchBarValue] = useState("")

  const buttonStyle = `font-bold px-5 py-1 uppercase border-2 ${navMobile ? 'border-[white]' : 'border-black'} rounded-3xl`

  return (
    <>
      <div className={`bg-white w-full px-20 flex ${openSearchBar ? 'h-20 border-b-4 border-black' : 'h-0'} transition-all duration-200 overflow-hidden`}>
        <input 
          className='w-full h-full text-3xl font-bold outline-none placeholder:text-black placeholder:font-bold' 
          type="text" 
          placeholder='Search' 
          onKeyUp={(e) => setSearchBarValue(e.target.value)}
        />
        <button 
          className='text-lg' 
          onClick={() => {
            router.push(`/categories?product=${searchBarValue}`)
          }}
        ><FaArrowRightLong /></button>
      </div>
      <nav className={`${navMobile ? 'bg-black/90 h-56 text-white' : 'bg-[#ffc700] h-20 text-black'} transition-all ease-in duration-400 overflow-hidden`}>
        <div className='py-4 px-1 md:px-10 flex justify-between items-center'>
          <div className='flex justify-between gap-3'>
            <Link href="/" className={buttonStyle + ' hidden lg:block'}>Shop</Link>
            <Link href="#" className={buttonStyle + ' hidden lg:block'}>About</Link>
            <button 
              className={`p-3 text-md md:text-2xl border-2 ${navMobile ? 'border-[white] text-white' : 'border-black'} rounded-full lg:hidden`}
              onClick={() => setNavMobile(navMobile ? false : true)}
            ><FaStream /></button>
            <button 
              className='ml-1 md:ml-4' 
              onClick={() => setOpenSearchBar(openSearchBar ? false : true)}
            ><FaSearch /></button>
          </div>
          <h1 className='uppercase font-bold text-md md:text-2xl text-center'>The store</h1>
          <div className='flex justify-between gap-4'>
            <button className={buttonStyle + ' hidden items-center lg:flex'}>
              United States <FaAngleDown className='ml-10' />
            </button>
            <button className='block lg:hidden mr-1 md:mr-4'>
              <FaLocationDot />
            </button>
            <button
              className={buttonStyle}
              onClick={() => setIsOpen(true)}
            ><span className='hidden lg:inline'>Cart</span> {ShopCartProducts.length ?? 0}</button>
          </div>
        </div>
        <div className='block lg:hidden px-10 py-6'>
          <Link href="/" className='block text-3xl font-bold mb-3'>Shop</Link>
          <Link href="#" className='block text-3xl font-bold'>About</Link>
        </div>
      </nav>
    </>
  )
}