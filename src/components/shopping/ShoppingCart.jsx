'use client'

import { FaRegWindowClose } from "react-icons/fa";
import ShopProductCard from "./ShopProductCard";
import { useContext } from 'react'
import { HandleShoppingCart } from "@/context/ShoppingCartContext";

export default function ShoppingCart() {
    let { isOpen, setIsOpen } = useContext(HandleShoppingCart);

    return (
        <div className={`h-screen bg-gray-100 p-5 fixed top-0 ${isOpen ? 'right-0' : 'right-[-650px]'} transition-all z-50`}>
            <div className="w-full flex justify-end text-3xl">
                <button onClick={() => setIsOpen(false)}><FaRegWindowClose /></button>
            </div>
            <h1 className="mb-10 pt-5 text-center text-2xl font-bold">Cart Items</h1>
            <div>
                <div className="mt-6 mb-3 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">$129.99</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">$4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                            <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                </div>
                <div className="w-full h-48 border border-black overflow-hidden overflow-y-auto">
                    <ShopProductCard />
                    <ShopProductCard />
                    <ShopProductCard />
                </div>
            </div>
        </div>
    )
}
