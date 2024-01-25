import axios from 'axios'
import ProductCard from '@/components/ProductCard'
import Footer from "@/components/Footer"
import Header from '@/components/Header'

async function loadProducts() {
  const { data } = await axios.get('http://localhost:3000/api/products');
  return data;
}

export default async function Homepage() {
  const products = await loadProducts();

  return (
    <section>
      <Header></Header>
      <div className='my-6 xl:mx-40 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center text-black'>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Footer></Footer>
    </section>
  )
}
