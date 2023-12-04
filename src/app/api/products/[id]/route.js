import { NextResponse } from 'next/server'
import { products } from '@/libs/products'

export async function GET(request, { params }) {
    try {
        const res = await products.filter(product => product.id == params.id);

        if(res.length === 0) {
            return NextResponse.json(
                { message: 'Product not found' }, 
                { status: 404 }
            );
        }

        return NextResponse.json(res);
    } catch (error) {
        return NextResponse.json(
            { message: error.message }, 
            { status: 500 }
        )
    }
}