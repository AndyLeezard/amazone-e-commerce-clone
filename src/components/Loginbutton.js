import { signIn } from 'next-auth/client'

function Loginbutton({ provider_name, provider_id }) {
    return (
        <div>
            <div className="flex mb-5" key={provider_name}>
                    <div className="w-3">
                    </div>
                    <button
                        className="flex justify-center place-items-center space-x-4 p-1 w-11/12 text-xs
                        md:text-sm border border-gray-400 hover:border-gray-600 rounded-md focus:bg-gray-600
                        hover:bg-gray-200 focus:text-white" onClick={() => signIn(provider_id, {callbackUrl: `${window.location.origin}`})}>
                        <div>
                            <img className="ml-3.5 w-8 " src={"/"+provider_name+".svg"} alt={"sign in with "+provider_name}/>
                        </div>
                        <div>
                            <span className="font-semibold left-4 text-lg md:text-md lg:text-sm text-gray-700">Sign in with {provider_name}</span>
                        </div>
                    </button>
            </div>
        </div>
    )
}

export default Loginbutton
