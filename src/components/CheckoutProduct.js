import { StarIcon } from '@heroicons/react/solid'
import React from 'react'
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime}) {
    const dispatch = useDispatch();

    const removeItem = () => {
        //Remove item from redux
        dispatch(removeFromBasket({id}));
    }

    return (
        <div className="grid grid-cols-5 p-5">
            {/*<Image src={image} height={200} width={400} objectFit="contain"/>*/}
            <img className="mx-auto" style={{height:"200px", width:"200", objectFit:"contain"}} src={image} alt="" />
            {/** Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">
                    {description}
                </p>
                <Currency quantity={price} currency="usd"/>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="/prime.svg" alt="" />
                        <p className="text-xs text-gray-500">FREE Next-day delivery</p>
                    </div>
                )}
            </div>
            {/** Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={removeItem} className="button mt-auto font-semibold">Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
