//public access data

module.exports = {
    images: {
        domains: ["links.papareact.com","fakestoreapi.com"],
    },
    env: {
        host: process.env.HOST,
        next_url: process.env.NEXTAUTH_URL,

        google_id: process.env.GOOGLE_ID,
        google_secret: process.env.GOOGLE_SECRET,
        github_id: process.env.GITHUB_ID,
        github_secret: process.env.GITHUB_SECRET,

        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        stripe_secret_key: process.env.STRIPE_SECRET_KEY,
        stripe_signing_key: process.env.STRIPE_SIGNING_SECRET,
    }
};