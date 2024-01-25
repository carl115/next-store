import axios from "axios";
import Product from "@/pages/Product";
import Footer from "@/components/Footer";

async function loadProduct(productId) {
  const { data } = await axios.get(`http://localhost:3000/api/products/${productId}`);
  return data;
}

export default async function Productpage({ params }) {
  const product = await loadProduct(params.id)

  return (
    <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <Product product={product[0]} />
    </div>
    <Footer></Footer>
  </section>
  )
}
