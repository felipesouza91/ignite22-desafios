// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '@/lib/stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405);
  }
  const { lineItems } = req.body;

  if (!lineItems) {
    return res.status(400).json({
      error: 'Price not found',
    });
  }
  console.log(lineItems);
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}`,
    line_items: lineItems,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}
