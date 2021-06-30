import React, { useState } from 'react';
import moment from 'moment';
import Currency from 'react-currency-formatter';
import {db} from "../../firebase";

function Order({id, amount, amountShipping, items, timestamp, images, eventID}) {
    const [hideorder,setHideOrder] = useState(false);

    console.log("order ",id, "has as items :", items);

    const orderLength = () => {
        if(typeof items !== "undefined"){
            return items.length
        }else{
            return 1
        }
    }

    const removeOrder = () => {
        setHideOrder(true);
        db
            .collection('users')
            .doc(eventID)
            .collection('orders')
            .doc(id)
            .delete()
            //.then(() => {window.location.reload();}) //if needed
    }

    return (
        <>
            {!hideorder &&
                <div className='relative border rounded-md'>
                    <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
                        <div>
                            <p className='font-bold text-xs'>ORDER PLACED</p>
                            <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold">TOTAL</p>
                            <p>
                                <Currency quantity={amount} currenct="usd"/> -Next Day Delivery {""}
                                <Currency quantity={amountShipping} currency="usd" />
                            </p>
                        </div>
                        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{orderLength()} items</p>
                        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
                            ORDER #{id}
                        </p>
                    </div>
                    <div className="p-5 sm:p-10">
                        <div className="flex space-x-6 overflow-x-auto">
                            {images.map(image => (
                                <img className="h-20 object-contain sm:h-32" src={image} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex justify-center lg:justify-end my-4">
                        <button className="button p-1 font-semibold mx-5 w-64 h-8 lg:w-auto lg:h-auto" onClick={removeOrder}>Remove order</button>
                    </div>
                    
                </div>}
        </>
    )
}

export default Order
