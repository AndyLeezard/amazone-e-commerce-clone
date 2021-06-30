import React, { useState,useEffect } from 'react';
import { getSession, useSession } from "next-auth/client";
import moment from 'moment';
import {db, auth} from "../../firebase";
import Order from "../components/Order";

const { default: Header } = require("../components/Header");

function orders({orders}) {
    const [session] = useSession();
    const firebaseUser = auth.currentUser;
    const [fborders,setOrders] = useState([]);

    useEffect(()=> {
        if(firebaseUser){
            db
            .collection('users')
            .doc(firebaseUser.email)
            .collection('orders')
            .orderBy('timestamp','desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(order => ({
                    id: order.id,
                    amount: order.data().amount,
                    amountShipping: order.data().amount_shipping,
                    images: order.data().images,
                    timestamp: moment(order.data().timestamp.toDate()).unix(),
                    items: order.data().images, //this is for the quantity and the images are formatted as an array so this is handy.
                    //If individual quantities have to be rendered later on, this algorithm should be modified accordingly.
                })))
            )); //iterate the ordered items
        }else{
            setOrders([])
        }
    }, [])

    const basketLength = () => {
        if(firebaseUser){
            console.log("firebaseUser detected - orders length is :",fborders.length)
            return fborders.length
        }else{
            if(typeof orders !== "undefined"){
                return orders.length
            }else{
                console.log("warning! - orders object is undefined.")
                return 0
            }
        }
    }

    return (
        <div>
            <Header/>
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Your orders</h1>
                {session || firebaseUser ? (
                    <h2>{basketLength()} Order(s)</h2>
                ):(
                    <h2>Please sign in to see your orders</h2>
                )}
                <div className='mt-5 space-y-4'>
                    {orders?.map(({id, amount, amountShipping, items, timestamp, images}) => (
                        <Order
                            key = {id}
                            id = {id}
                            amount = {amount}
                            amountShipping = {amountShipping}
                            items = {items}
                            timestamp = {timestamp}
                            images = {images}
                            eventID = {session.user.email}
                        />
                    ))}
                    {fborders?.map(({id, amount, amountShipping, items, timestamp, images}) => (
                        <Order
                            key = {id}
                            id = {id}
                            amount = {amount}
                            amountShipping = {amountShipping}
                            items = {items}
                            timestamp = {timestamp}
                            images = {images}
                            eventID = {firebaseUser.email}
                            />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default orders

export async function getServerSideProps(context){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    //Get the users logged in credentials...
    const session = await getSession(context);
    //console.log(req);

    if(!session){
        console.log("orders.js : async getServerSideProps : even the firebase Auth session couldn't be detected. returning zero props.")
        return {
            props: {}
        };
    }

    // Firebase db
    const stripeOrders = await db
        .collection('users')
        .doc(session.user.email)
        .collection('orders')
        .orderBy('timestamp','desc')
        .get();

    // Stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100
                })
            ).data,
        }))
    )

    return {
        props: {
            orders,
        },
    };
}