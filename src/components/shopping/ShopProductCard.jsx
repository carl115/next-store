'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { updateCartProduct, deleteCartProduct } from '@/libs/localstorage';
import { FaCircleNotch } from "react-icons/fa";
import ProductCardLoad from './ProductCardLoad';

export default function ShopProductCard({ product }) {
    const [productUnits, setProductUnits] = useState(product.units);
    const [load, setLoad] = useState(false);

    const deleteProduct = async (id) => {
        setLoad(true);
        setTimeout(async () => {
            await deleteCartProduct(id);
        }, 2000);
        setLoad(false);
    }

    const updateProduct = async () => {
        let productUpdated = {};

        productUpdated = { ...product, units: productUnits, total: product.price * productUnits };

        await updateCartProduct(product.id, productUpdated);
    }

    const addCount = () => {
        setProductUnits(productUnits + 1);
    }

    const reduceCount = () => {
        productUnits <= 1 ? setProductUnits(1) : setProductUnits(productUnits - 1);
    }

    useEffect(() => {
        updateProduct();
    }, [productUnits]);

    return (
        <>
            {!load ? (
                <div className="justify-between mb-6 rounded-lg bg-white p-6 pr-3 shadow-md sm:flex sm:justify-start">
                    <Image src={product.img} width={100} height={50} alt={product.name} className="w-full rounded-lg sm:w-40" />
                    <div className="w-full ml-4 grid grid-cols-[1fr_30px] grid-rows-2 gap-3 justify-items-center content-center">
                        <div className="flex items-center justify-center">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                                <p className="mt-1 text-xs text-gray-700">{product.price}</p>
                            </div>
                            <div className="ml-4 flex items-center border-gray-100">
                                <button
                                    className="cursor-pointer rounded-l bg-gray-200 py-2 px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    onClick={reduceCount}
                                > - </button>
                                <input className="h-10 w-10 border bg-white text-center text-xs outline-none pointer-events-none" type="number" value={productUnits} />
                                <button
                                    className="cursor-pointer rounded-r bg-gray-200 py-2 px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    onClick={addCount}
                                > + </button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center row-span-2">
                            {!load ? (
                                <button className="h-6" onClick={() => deleteProduct(product.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            ) : (<FaCircleNotch className='animate-spin' />)
                            }
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-sm">{product.total.toFixed(2)} USD</p>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <ProductCardLoad />
                    <ProductCardLoad />
                    <ProductCardLoad />
                    <ProductCardLoad />
                </>
            )}
        </>
    )
}
