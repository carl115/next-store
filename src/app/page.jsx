import Image from "next/image"
import axios from 'axios'
import ProductCard from '@/components/ProductCard'
import { products } from "@/libs/products"

/*
async function loadProducts() {
    const { data } = await axios.get('http://localhost:3000/api/products')
    return data
}
*/

export default async function Homepage() {
  //const products = await loadProducts()

  return (
    <section>
      <header className="bg-[#ffc700] w-full h-[450px] flex relative overflow-hidden">
        <Image 
          src='/pexels-andrea-piacquadio-3755706.jpg' 
          width={400}
          height={400}
          className="w-[350px] h-[350px] rounded-full border border-black absolute left-0 top-0 bottom-0 m-auto"
        />
        <Image 
          src='/pexels-adrienne-andersen-2237801.jpg' 
          width={400}
          height={400}
          style={{
            objectFit: 'cover',
            clipPath: 'polygon(0 0, 100% 0, 61% 51%, 100% 100%, 0 100%, 35% 51%)' }}
          className="w-[350px] h-[350px] border border-black absolute left-0 top-0 right-0 bottom-0 m-auto"
        />
        <Image 
          src='/pexels-taryn-elliott-5405629.jpg' 
          width={400}
          height={400}
          style={{
            objectFit: 'cover',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          className="w-[350px] h-[350px] border border-black absolute top-0 right-0 bottom-0 m-auto"
        />
      </header>
      <div className='my-6 grid gap-4 grid-cols-4 text-black'>
        {products.map(product => ( 
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
