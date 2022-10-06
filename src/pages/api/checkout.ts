// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { GetServerSideProps, NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

/*type Data = {
  name: string
}*/



export default  async function  handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const priceId: string = req.body.priceId

  const productForCheckout = req.body.productsForCheckout as Stripe.Checkout.SessionCreateParams.LineItem[]
  const seuccessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: seuccessUrl,
    cancel_url: cancelUrl,
    line_items: productForCheckout,
    mode: 'payment'
  })
  return res.status(201).json({checkoutUrl: checkoutSession.url})
}






  