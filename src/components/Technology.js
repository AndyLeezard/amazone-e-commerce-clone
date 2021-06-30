import React from 'react'

function Technology() {
    return (
        <div className="w-full h-auto p-5">
            <div className="border-2 border-solid border-gray-400 rounded-md p-2 text-center bg-footerbutton mb-4">
                <p className="font-semibold text-gray-100">This web app is coded with these technologies:</p>
                <div className="grid grid-cols-3 lg:grid-cols-6 p-2 items-center place-items-center">
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/react.svg" alt="React" title="React"/></a>
                    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/redux.svg" alt="Redux" title="Redux"/></a>
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/next-js.svg" alt="Next JS" title="Next JS" /></a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/tailwindcss.svg" alt="Tailwind css" title="Tailwind css"/></a>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/nodejs-icon.svg" alt="Node JS" title="Node JS"/></a>
                    <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/yarn.svg" alt="Yarn" title="Yarn"/></a>
                </div>
            </div>
            <div className="border-2 border-solid border-gray-400 rounded-md p-2 text-center bg-footerbutton mt-4">
                <p className="font-semibold text-gray-100">This web app is powered by these service providers:</p>
                <div className="grid grid-cols-2 lg:flex lg:space-x-44 lg:justify-center p-2 items-center place-items-center">
                    <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer"><img className="cursor-pointer" width={100} height={100} src="/stripe.svg" alt="Stripe" title="Stripe"/></a>
                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img className="" width={100} height={100} src="/firebase.svg" alt="Firebase" title="Firebase"/></a>
                </div>
            </div>
        </div>
    )
}

export default Technology

