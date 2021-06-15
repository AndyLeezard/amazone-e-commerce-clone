import React from 'react'

function Technology() {
    return (
        <div class="w-full h-auto p-5">
            <div className="border-2 border-solid border-gray-400 rounded-md p-2 text-center bg-footerbutton mb-4">
                <p class="font-semibold text-gray-100">This web app is coded with these technologies:</p>
                <div class="grid grid-cols-3 lg:grid-cols-6 p-2 items-center place-items-center">
                    <img class="" width={100} height={100} src="/react.svg" alt="React" title="React"/>
                    <img class="" width={100} height={100} src="/redux.svg" alt="Redux" title="Redux"/>
                    <img class="" width={100} height={100} src="/next-js.svg" alt="Next JS" title="Next JS" />
                    <img class="" width={100} height={100} src="/tailwindcss.svg" alt="Tailwind css" title="Tailwind css"/>
                    <img class="" width={100} height={100} src="/nodejs-icon.svg" alt="Node JS" title="Node JS"/>
                    <img class="" width={100} height={100} src="/yarn.svg" alt="Yarn" title="Yarn"/>
                </div>
            </div>
            <div className="border-2 border-solid border-gray-400 rounded-md p-2 text-center bg-footerbutton mt-4">
                <p class="font-semibold text-gray-100">This web app is powered by these service providers:</p>
                <div class="grid grid-cols-2 lg:flex lg:space-x-44 lg:justify-center p-2 items-center place-items-center">
                    <img class="" width={100} height={100} src="/stripe.svg" alt="Stripe" title="Stripe"/>
                    <img class="" width={100} height={100} src="/firebase.svg" alt="Firebase" title="Firebase"/>
                </div>
            </div>
        </div>
    )
}

export default Technology

