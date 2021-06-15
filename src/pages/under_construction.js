import React from 'react';
import Technology from '../components/Technology';
import { useRouter } from "next/router";

function under_construction() {
    const router = useRouter();
    
    return (
        <div class="flex flex-col w-full h-screen bg-footerbg">
            <div class="mt-4">
                <img className="mx-auto my-2 object-contain cursor-pointer" onClick={() => router.push('/')} src='/logo_side6.svg' width={150}/>
                <p className=""></p>
                <h1 class="font-semibold text-gray-100 text-center">Sorry, this feature is not operational yet.</h1>
                <img class="mx-auto animate-pulse" src="/img/under-construction.png" width={150} alt="" />
                <Technology/>
                
                <div className="mx-auto text-center">
                    <p class="font-bold text-red-500 mt-4">Disclaimer: <span class="font-semibold text-gray-50">This is not the official Amazon Store.</span></p>
                    <p class="font-semibold text-gray-50">It is a redesign, built purely for educational purposes.</p>
                    <p class="font-semibold text-gray-50">For more details, please read the <span onClick={() => router.push('/conditions')} class="text-purple-400 cursor-pointer">conditions of use</span>.</p>
                    <p class="font-semibold text-white text-sm my-4">© 2021 | Developed by Andy Lee</p>
                </div>
            </div>
        </div>
    )
}

export default under_construction
