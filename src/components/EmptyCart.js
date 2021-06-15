import React from 'react'

function CheckoutProduct() {

    return (
        <div className="grid grid-cols-4 p-5">
            {/*<Image src={image} height={200} width={400} objectFit="contain"/>*/}
            <img className="mx-auto" style={{height:"200px", width:"200", objectFit:"contain"}} src="/img/emptyCart.svg" alt="" />
            {/** Middle */}
            <div className="col-span-2 mx-5">
                <div className="flex">
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">
                </p>
            </div>
            {/** Right add/remove buttons */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <a href="/auth/signin"><button className="button mt-auto">Sign In</button></a>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
