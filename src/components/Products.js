import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 2;

function Products({ id, title, price, description, category, image, widthvalue}) {
    const dispatch = useDispatch();

    const [rating] = useState(Math.floor(Math.random()*(MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const [hasPrime] = useState(Math.random() < 0.5)

    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image, hasPrime,
        };

        // Sending the product as an action to the REDUX store... the basket slice.
        dispatch(addToBasket(product))
    };

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            {/*<Image src={image.includes("https") ? image : image.} height={200} width={200} objectFit="contain"/>*/}
            <img onClick={addItemToBasket} className="mx-auto cursor-pointer hover:animate-pulse" style={{height:"200px", width:widthvalue, objectFit:"contain"}} src={image} alt="" />
            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <StarIcon className="h-5 text-yellow-500"/>
                    ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="usd"/>
            </div>
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-3 mb-3">
                    <img className="w-12" src="/prime.svg" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day delivery</p>
                </div>
            )}
            <button onClick={addItemToBasket} className="mt-auto button font-semibold">Add to Cart</button>
        </div>
    )
}

export default Products
