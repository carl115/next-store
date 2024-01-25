'use client'

import { useState } from 'react'
import Image from "next/image";
import { addCartProduct } from '@/libs/localstorage'
import { FaFacebookF, FaStar, FaRegStar } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function Product({ product }) {
  const [productUnits, setProductUnits] = useState(1);

  const addProduct = async () => {
    await addCartProduct({productId: product.id, name: product.name, img: product.img, units: productUnits, price: product.price, total: product.price * productUnits })
  }

  return (
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image alt={product.name} width={400} height={400} className="lg:w-1/2 lg:h-auto h-full object-cover object-center rounded" src={product.img} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {product.name}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <FaStar className="w-4 h-4 text-[#ffc700]" />
            <FaStar className="w-4 h-4 text-[#ffc700]" />
            <FaStar className="w-4 h-4 text-[#ffc700]" />
            <FaStar className="w-4 h-4 text-[#ffc700]" />
            <FaRegStar className="w-4 h-4 text-[#ffc700]" />  
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <FaFacebookF />
            </a>
            <a className="text-gray-500">
              <FaWhatsapp />
            </a>
          </span>
        </div>
        <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae exercitationem quos illum obcaecati odio odit inventore repudiandae, dolore, nisi iusto, mollitia autem laudantium blanditiis. Earum porro impedit ratione provident excepturi magni minus suscipit, architecto iste? Delectus, consectetur consequuntur sequi exercitationem, optio, doloribus aliquid error ipsam in accusantium laudantium neque?</p>
        {product.units > 0 ?
          (<p className='text-green-500 pt-7'>{product.units} units available</p>) :
          (<p className='text-red-600 pt-7'>Sold out</p>)
        }
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className={`ml-4 flex items-center border-gray-100 ${product.units == 0 && 'opacity-50 pointer-events-none cursor-not-allowed'}`}>
            <button
              className="cursor-pointer rounded-l bg-gray-200 py-2 px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => productUnits <= 1 ? setProductUnits(1) : setProductUnits(productUnits - 1)}
            > - </button>
            <input className="h-10 w-10 border bg-white text-center text-xs outline-none" type="number" value={productUnits} />
            <button
              className="cursor-pointer rounded-r bg-gray-200 py-2 px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={() => {
                productUnits >= product.units ? setProductUnits(product.units) : setProductUnits(productUnits + 1)
              }}
            > + </button>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
          <button 
            className={`flex ml-auto text-white bg-[#ffc700] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffc700]/90 rounded ${product.units == 0 && 'opacity-50 pointer-events-none hover:cursor-not-allowed'}`}
            onClick={addProduct}
          >Add cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
