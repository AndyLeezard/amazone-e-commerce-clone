//public access data

module.exports = {
    images: {
        domains: ["links.papareact.com","fakestoreapi.com"],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        stripe_secret_key: process.env.STRIPE_SECRET_KEY,
        stripe_signing_key: process.env.STRIPE_SIGNING_SECRET,
    }
};