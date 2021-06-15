import React from 'react'
import Technology from '../components/Technology';
import { useRouter } from "next/router";

function conditions() {
    const router = useRouter();

    return (
        <div class="flex flex-col w-full h-auto bg-footerbg">
            <div class="mt-4">
                <img className="mx-auto my-2 object-contain cursor-pointer" onClick={() => router.push('/')} src='/logo_side6.svg' width={150}/>
                <p className=""></p>
                <h1 class="font-bold text-lg text-gray-100 text-center subpixel-antialiased">Conditions of Use</h1>
                <h1 class="font-semibold text-sm text-gray-200 text-center">Last updated: June 15, 2021</h1>
                <div className="mx-auto text-center">
                    <p class="font-bold text-red-500 mt-4">Disclaimer: <span class="font-semibold text-gray-50">this is not the official Amazon Store.</span></p>
                    <p class="font-semibold text-gray-50">It is a redesign, built purely for educational purposes.</p>
                    <div className="text-left justify-self-center p-5 mx-20 lg:mx-60">
                        <p class="font-semibold text-sm text-gray-200">This page ("Conditions" or "Conditions of Use") sets forth the general guidelines, disclosures, and terms of your use of the àmazone.lee website ("Website" or "Web App").</p>
                        <p class="font-semibold text-sm text-gray-200">By accessing and using the Website, you acknowledge that you have read, understood, and agree with the terms of this Disclaimer as well as those of the others below.</p>
                        <p class="font-semibold text-sm text-gray-200">If you are entering into this Disclaimer on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Disclaimer, in which case the terms "User", "you" or "your" shall refer to such entity.</p>
                        <p class="font-semibold text-sm text-gray-200">If you do not have such authority, or if you do not agree with the terms of this Disclaimer, you must not accept this Disclaimer and may not access and use the Web App.</p>
                    </div>
                </div>
                <div className="mx-auto text-center">
                    <p class="font-bold text-green-400 mt-4">Privacy: <span class="font-semibold text-gray-50">it is not necessary to provide real personal informaion.</span></p>
                    <div className="text-left justify-self-center p-5 mx-20 lg:mx-60">
                        <p class="font-semibold text-sm text-gray-200">This Web App only collects the necessary information you provide (fictional or real) voluntarily when trying out the Web App.</p>
                        <p class="font-semibold text-sm text-gray-200">Collected data will be stored in the back-end server powered by <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><span className="text-yellow-200">Firebase</span></a>, some of which (the payment order data) will be shared with <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer"><span className="text-indigo-200">Stripe</span></a> API.</p>
                        <p class="font-semibold text-sm text-gray-200"></p>
                        <p class="font-semibold text-sm text-gray-200">By accessing and using the Website and Services you agree with this privacy notice ("Policy"). If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Web App.</p>
                    </div>
                </div>
                <div className="mx-auto text-center">
                    <p class="font-bold text-yellow-400 mt-4">Conditions of Use: <span class="font-semibold text-gray-50">this web app does not provide any actual service nor sell any real product.</span></p>
                    <div className="text-left justify-self-center p-5 mx-20 lg:mx-60">
                        <p class="font-semibold text-sm text-gray-200">Proceeding to checkout will not charge you. It is completely safe to test the payment feature powered by <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer"><span className="text-indigo-200">Stripe</span></a>.</p>
                        <p class="font-semibold text-sm text-gray-200">However, it is recommended to use the dedicated test credit card code : <span class="text-blue-500">"4242 4242 4242 4242"</span> with any arbitrary expiration date and CVV code. </p>
                        <p class="font-semibold text-sm text-gray-200">It is <span class="text-red-600">not necessary</span> to provide real information for the shipment. Order history can be erased on demand.</p>
                        <p class="font-semibold text-sm text-gray-200">By accessing and using the Website and Services you agree with these conditions ("terms") of use. If you do not agree to abide by these terms, you are not authorized to access or use the Web App.</p>
                    </div>
                </div>
                <Technology/>
                <p class="text-center font-semibold text-white text-sm my-4">© 2021 | Developed by Andy Lee</p>
            </div>
        </div>
    )
}

export default conditions
