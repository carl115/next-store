import { NextResponse } from 'next/server'
import { products } from '@/libs/products'

export async function GET() {
    try {
        const res = await products
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json(
            { message: error.message }, 
            { status: 500 }
        )
    }
}