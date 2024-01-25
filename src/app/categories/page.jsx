import axios from "axios"
import Link from 'next/link'
import Categories from '@/pages/Categories'

async function loadProducts() {
    const { data } = await axios.get('http://localhost:3000/api/products');
    return data;
}

export default async function categories() {
    const products = await loadProducts();

    const styleLinks = "mb-3 text-xl hover:font-bold hover:text-green-400"

  return (
    <section className="p-5">
        <h1 className='text-4xl font-bold mb-10'>Categories</h1>
        <div className='grid grid-cols-[300px_1fr]'>
            <div>
                <ul className='w-36 pt-3 h-full border-r-2 border-black'>
                    <li className={styleLinks}>
                        <Link href="/categories?product=shirt">Shirts</Link>
                    </li>
                    <li className={styleLinks}>
                        <Link href="/categories?product=pants">Pants</Link>
                    </li>
                    <li className={styleLinks}>
                        <Link href="/categories?product=suit">Suits</Link>
                    </li>
                    <li className={styleLinks}>
                        <Link href="/categories?product=tuxedo">Tuxedos</Link>
                    </li>
                </ul>
            </div>
            <Categories products={products} />
        </div>
    </section>
  )
}
