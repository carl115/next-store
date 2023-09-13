"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className='bg-white w-[300px] rounded-3xl border-gray-800 mb-3 p-4 hover:bg-gray-100 hover:cursor-pointer'>
      <Image src={product.img} width={300} height={300} className='w-full h-[400px] mb-4 rounded-3xl' />
      <div className='flex justify-between'>
        <h1 className='text-lg font-bold'>{product.name}</h1>
        <p className='text-xl'>${product.price}</p>
      </div>
    </Link>
  )
}
