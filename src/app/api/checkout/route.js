import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientId = process.env.PAYPAL_CLIENT_ID
const clientSecret = process.env.PAYPAL_CLIENT_SECRET

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)

const client = new paypal.core.PayPalHttpClient(environment)

export async function POST(request, { params }) {
  const requestPaypal = new paypal.orders.OrdersCreateRequest()

  const res = await request.json()
  
  requestPaypal.requestBody({
    intent: "CAPTURE",
    purchase_units: [ res ],
  })

  const response = await client.execute(requestPaypal)

  return NextResponse.json({
    id: response.result.id
  })
}