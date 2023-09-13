"use client"

import { useState, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Form() {
    let inputClass = 'shadow text-black appearance-none border rounded w-full py-2 px-3'
    let inputRow = 'my-4' 

    const [product, setProduct] = useState({ 
        name: '', 
        description: '', 
        price: 0
    })

    const router = useRouter()

    const form = useRef(null)

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }  

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post('/api/products', product)
        console.log(res)
        form.current.reset()
        router.push('/products')
    }

    return (
        <form className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit} ref={form}>
            <div className={inputRow}>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Product name</label>
                <input type="text" placeholder="name" name='name' onChange={handleChange} className={inputClass} autoFocus />
            </div>
            <div className={inputRow}>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Product Price</label>
                <input type="number" placeholder="00.00" name='price' onChange={handleChange} className={inputClass} />
            </div>
            <div className={inputRow}>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Product Description</label>
                <textarea rows={3} placeholder="description" name='description' onChange={handleChange} className={`${inputClass} resize-none`}></textarea>
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save product</button>
        </form>
    )
}
