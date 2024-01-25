'use client'

import { useContext, useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { HandleShoppingCart } from "@/context/ShoppingCartContext";
import { FaRegWindowClose } from "react-icons/fa";
import ShopProductCard from './ShopProductCard';
import { clearShoppingCart } from '@/libs/localstorage'

export default function ShoppingCart() {
    let { isOpen, setIsOpen, ShopCartProducts } = useContext(HandleShoppingCart);
    const [countTotal, setCountTotal] = useState(0);

    const setTotalCheckout = async () => {
        let total = 0;
        let cartItems = {}
        let items = [];

        for (let i = 0; i < ShopCartProducts.length; i++) {
            total += ShopCartProducts[i].total

            items.push({
                name: ShopCartProducts[i].name, 
                description: 'Lorem', 
                quantity: ShopCartProducts[i].units.toString(),
                unit_amount: {
                    currency_code: "USD",
                    value: ShopCartProducts[i].total.toString(),
                }
            })
        }

        cartItems = {
            amount: {
                currency_code: "USD",
                value: total.toString(),
                breakdown: {
                    item_total: {
                        currency_code: "USD",
                        value: total.toString(),
                    },
                },
            },
            items
        }

        return cartItems;
    }

    const setTotalCart = () => {
        let total = 0;

        for (let i = 0; i < ShopCartProducts.length; i++) {
            total += ShopCartProducts[i].total;
        }

        setCountTotal(total.toFixed(2))
    }

    useEffect(() => {
        setTotalCart()
    }, [ShopCartProducts])

    return (
        <div className={`w-full lg:w-[500px] h-screen bg-gray-100 p-5 fixed top-0 ${isOpen ? 'right-0' : 'right-[-750px]'} transition-all z-50`}>
            <div className="w-full flex justify-end text-3xl">
                <button onClick={() => setIsOpen(false)}><FaRegWindowClose /></button>
            </div>
            <h1 className="mb-10 pt-5 text-center text-2xl font-bold">Cart Items</h1>
            <div>
                <div className="mt-6 mb-3 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">${countTotal}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div>
                            <p className="mb-1 text-lg font-bold">${countTotal} USD</p>
                        </div>
                    </div>
                    <PayPalScriptProvider
                        options={{ clientId: "Ad4lwUeBQAt44FZUMmRrRmMFtCaV9LqF4RPWQsz-zyWMuHmq3Mifvaoqu8NEvbTQ05BHemD4EBFLZ3nh" }}
                    >
                        <PayPalButtons
                            style={{ color: 'blue', layout: 'horizontal' }}
                            createOrder={async () => {
                                const checkout = await setTotalCheckout()

                                const res = await fetch('/api/checkout', {
                                    method: 'POST',
                                    body: JSON.stringify(checkout)
                                })

                                const order = await res.json();

                                return order.id
                            }}
                            onApprove={(data, actions) => {
                                clearShoppingCart();
                                actions.order.capture()
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
                <div className="w-full h-56 overflow-hidden overflow-y-auto">
                    {ShopCartProducts.length > 0 ?
                        ShopCartProducts.map(p => (
                            <ShopProductCard key={p.id} product={p} />
                        )) :
                        (<h2 className="w-full h-full text-xl px-10 flex justify-center items-center">
                            There are not products in your cart
                        </h2>)
                    }
                </div>
            </div>
        </div>
    )
}
