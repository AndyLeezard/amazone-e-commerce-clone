import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import EmptyCart from '../components/EmptyCart';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import Currency from "react-currency-formatter";
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { auth } from '../../firebase';


const stripePromise = loadStripe(process.env.stripe_public_key); //capitalizing it won't work.

function checkout() {
    const items = useSelector(selectItems);
    
    const total = useSelector(selectTotal);
    const [session] = useSession();
    const firebaseUser = auth.currentUser;

    const createCheckoutSession = async () => {
        var themail
        if(session){
            console.log("checkout.js : stripe session mail has been defined by NextAuth")
            themail=session.user.email
        }else if(firebaseUser){
            console.log("checkout.js : stripe session mail has been defined by Firebase Auth")
            themail=firebaseUser.email
        }else{
            console.log("Warning- checkout.js can't figure out which auth is being used !")
            themail="error@error.error"
        }
        console.log("checkout.js : themail is : ", themail)

        const stripe = await stripePromise;
        //Call the backend to create a checkout session...
        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items: items,
            email: themail,
        })

        // Redirect the user to the Stripe checkout page
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });
    
        if(result.error){
            alert(result.error.message);
        };
    };

    return (
        <div className="bg-gray-100 h-screen">
            <Header/>
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/**Left */}
                <div className="flex-grow m-5 shadow-sm">
                    <div className="border-2 border-solid border-gray-400 rounded-md w-full h-auto mb-5 p-2 bg-gray-50">
                        <p class="font-bold text-green-700">Reminder : <span class="font-semibold text-gray-700"> this web app does not actually sell or send any real product. Proceeding to checkout <span class="text-red-600"> will not charge you</span>. It is <span class="font-bold text-green-500">completely safe</span> to test the payment feature powered by <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer"><span  class="font-bold text-indigo-500">Stripe</span></a>.</span></p>
                        <p class="font-semibold text-gray-700">However, it is recommended to use the dedicated test credit card code : <span class="text-blue-500">"4242 4242 4242 4242"</span> with any arbitrary expiration date and CVV code. </p>
                        <p class="font-semibold text-gray-700">It is <span class="text-red-600">not necessary</span> to provide real information for the shipment. All data will be stored in the backend server and can be removed on demand.</p>
                        <p class="font-semibold text-gray-700">For more details, please read the <a href="/conditions"><span class="text-purple-400">conditions of use</span></a>.</p>
                    </div>
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? 'Your Àmazone Cart is empty.' : 'Shopping Basket'}
                        </h1>
                        {items.length === 0 && (<EmptyCart/>)}
                        {items.map((item, i) => (
                            <CheckoutProduct
                                key = {i}
                                id = {item.id}
                                title = {item.title}
                                rating = {item.rating}
                                price = {item.price}
                                description = {item.description}
                                category = {item.category}
                                image = {item.image}
                                hasPrime = {item.hasPrime}
                            />
                        ))}
                    </div>
                </div>
                {/**Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal ({items.length} items):
                                <span className="font-bold">
                                    <Currency quantity={total} currency="usd"/>
                                </span>
                            </h2>
                            {!(session || firebaseUser) ? (
                                <a href="/auth/signin"><button role="link" disbled={true} className="button mt-2 from-gray-300 to-gray-500 border-gray-200 text-gray-50 font-bold">
                                Sign in to checkout
                                </button></a>
                                ) : (
                                <button role="link" onClick={createCheckoutSession} className="button mt-2">
                                Proceed to checkout
                                </button>
                                ) }
                        </>
                    )}

                </div>
            </main>
        </div>
    )
}

export default checkout
