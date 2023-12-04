"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className='bg-white w-[260px] rounded-3xl border-gray-800 mb-3 p-4 hover:cursor-pointer'>
      <Image src={product.img} alt={product.name} width={300} height={300} className='w-full h-[360px] mb-4 rounded-3xl' />
      <div className='flex justify-between text-md'>
        <h3 className='font-bold'>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  )
}
