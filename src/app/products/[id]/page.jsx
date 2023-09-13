import axios from "axios";

async function loadProduct(productId) {
  const { data } = await axios.get(`http://localhost:3000/api/products/${productId}`)

  return data
}

export default async function Productpage({ params }) {
  const product = await loadProduct(params.id)

  return (
    <section className="flex justify-center items-center">
      <div className="bg-white p-6 text-black">
        <p>Name: {product[0].name}</p>
        <p>Price: {product[0].price}</p>
        <p>Description: {product[0].description}</p>

        <div className="flex gap-x-2 justify-end mt-2">
          <button className="bg-gray-500 text-white py-2 px-3 rounded hover:bg-gray-700">Edit</button>
          <button className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-700">Delete</button>
        </div>
      </div>
    </section>
  )
}
