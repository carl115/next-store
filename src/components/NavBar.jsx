import Link from 'next/link'

export default function NavBar() {
    const buttonStyle = 'px-5 py-1 uppercase border-2 border-[#000000] rounded-2xl'
  return (
    <nav className='bg-[#ffc700] text-black py-4 flex justify-around items-center'>
        <div className='flex justify-between gap-4'>
            <Link href="/" className={buttonStyle}>Shop</Link>
            <Link href="/about" className={buttonStyle}>About</Link>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <h1 className='uppercase font-bold text-2xl'>The store</h1>
        <div className='flex justify-between gap-3'>
            <button className={buttonStyle}>
              United States <i class="fa-solid fa-chevron-down"></i>
            </button>
            <button className={buttonStyle}>Cart {0}</button>
        </div>
    </nav>
  )
}