'use client'

import { createContext, useState } from 'react'

export const HandleShoppingCart = createContext({});

export default function ShoppingCartContext({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return <HandleShoppingCart.Provider value={{isOpen, setIsOpen}}>{children}</HandleShoppingCart.Provider>
}
