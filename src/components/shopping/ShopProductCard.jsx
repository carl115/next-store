import { useState } from 'react'

export default function ShopProductCard() {
    const [units, setUnits] = useState(1);

    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 pr-3 shadow-md sm:flex sm:justify-start">
            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="w-full ml-4 grid grid-cols-[1fr_30px] grid-rows-2 gap-3 justify-items-center content-center">
                <div className="flex items-center justify-center">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div className="ml-4 flex items-center border-gray-100">
                        <button 
                            className="cursor-pointer rounded-l bg-gray-200 py-2 px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => units <= 1 ? setUnits(1) : setUnits(units - 1)}
                        > - </button>
                        <input className="h-10 w-10 border bg-white text-center text-xs outline-none" type="number" value={units} />
                        <button 
                            className="cursor-pointer rounded-r bg-gray-200 py-2 px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => setUnits(units + 1)}
                        > + </button>
                    </div>
                </div>
                <div className="flex justify-center items-center row-span-2">
                    <button className="h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-sm">259.000 ₭</p>
                </div>
            </div>
        </div>
    )
}
