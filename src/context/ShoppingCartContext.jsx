'use client'

import { createContext, useState, useEffect } from 'react'
import { getShoppingCart } from '@/libs/localstorage'

export const HandleShoppingCart = createContext({});

export default function ShoppingCartContext({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ShopCartProducts, setShopCartProducts] = useState([]);

  const getProducts =  async () => {
    const res = await getShoppingCart();
    setShopCartProducts(res);
  }

  useEffect(() => {
    setInterval(() => {
      getProducts();
    }, 1000);
  }, []);

  return <HandleShoppingCart.Provider value={{isOpen, setIsOpen, ShopCartProducts}}>{children}</HandleShoppingCart.Provider>
}
