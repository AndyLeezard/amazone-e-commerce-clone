import { signIn } from 'next-auth/client'

function Loginbutton({ provider_name, provider_id }) {

    const theIcon = () => {
        if(provider_name==="Google"){
            //console.log("it matches Google")
            return ("Google")
        }else if(provider_name==="GitHub"){
            //console.log("it matches GitHub")
            return (provider_name)
        }else{
            console.log("WARNING - the app is trying to reach an unknownProvider named :", provider_name, "Let the developer update.", "..")
            console.log("For information, the unknown provider's id is :", provider_id)
            return (provider_name)
        }
    }

    const isProvider = () => {
        if(provider_name!=="Google" && provider_name!=="GitHub"){
            return (false)
        }else{
            return (true)
        }
    }
    //console.log(theIcon())
    
    //console.log("provider name : ",provider_name)
    //console.log(provider_name,"'s provider id is :",provider_id)

    return (
        <div>
            {isProvider() ?(
            <div className="flex mb-5" key={provider_name}>
                    <div className="w-3">
                    </div>
                    <button
                        className="flex justify-center place-items-center space-x-4 p-1 w-11/12 text-xs
                        md:text-sm border border-gray-400 hover:border-gray-600 rounded-md focus:bg-gray-600
                        hover:bg-gray-200 focus:text-white" onClick={() => signIn(provider_id, {
                            callbackUrl: `${window.location.origin}`,
                        })}>
                        <div>
                            <img className="ml-3.5 w-8 " src={"/"+theIcon()+".svg"} alt="" />
                        </div>
                        <div>
                            <span className="font-semibold left-4 text-lg md:text-md lg:text-sm text-gray-700">Sign in with {provider_name}</span>
                        </div>
                    </button>
            </div>): ""}
        </div>
    )
}

export default Loginbutton
