// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { env } from 'process'
import { stripe } from '../../lib/stripe'

/*type Data = {
  name: string
}*/



export default  async function  handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const priceId: string = req.body.priceId

  const seuccessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: seuccessUrl,
    cancel_url: cancelUrl,
    line_items: [
      {price: priceId, quantity: 1},

    ],
    mode: 'payment'
  })

  
  return res.status(201).json({checkoutUrl: checkoutSession.url})
}
