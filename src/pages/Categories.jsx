'use client'

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Categories({ products }) {
    const searchParams = useSearchParams()
    const [list, setList] = useState([])

    useEffect(() => {
        let param = searchParams.get('product').toLocaleLowerCase()
        if(param) {
            setList(
                products.filter(p => p.name.toLowerCase().includes(param))
            )
        }
    }, [searchParams])

    return (
        <div className='grid grid-cols-3'>
            {list.map(p => (
                <ProductCard product={p} />
            ))}
        </div>
    )
}
