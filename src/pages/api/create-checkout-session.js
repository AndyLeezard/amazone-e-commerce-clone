//This is not for public access.

//Initialize
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//Create an endpoint
export default async (req, res) => {
    const { items, email } = req.body;

    //is a new form
    const transformedItems = items.map(item => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        }
    }))
    console.log("received a payment checkout request - transform success")

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ['shr_1IzViyIgDcy0EhaH3eYgBhJm'],
        shipping_address_collection: {
            allowed_countries: ['US','GB','CA'] //,'FR'
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`, //getting back to checkout page is canceling.
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image)) 
        }
    })

    res.status(200).json({id: session.id});
};