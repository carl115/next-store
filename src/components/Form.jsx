"use client"

import { useState, useEffect } from 'react'

export default function Form() {
    const [product, setProduct] = useState({ 
        name: '', 
        description: '', 
        price: 0
    })

    const handleChange = (e) => {
        console.log(e)
    }  
    return (
        <form className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Product name</label>
            <input type="text" placeholder="name" onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3' />

            <label className='block text-gray-700 text-sm font-bold mb-2'>Product Price</label>
            <input type="number" placeholder="00.00" onChange={handleChange} className='shadow appearance-none border rounded w-full py-2 px-3' />

            <label className='block text-gray-700 text-sm font-bold mb-2'>Product Description</label>
            <textarea placeholder="description" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 resize-none"></textarea>
        </form>
    )
}
