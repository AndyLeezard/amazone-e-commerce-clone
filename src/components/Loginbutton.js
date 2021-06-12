import { signIn } from 'next-auth/client'

function Loginbutton({ provider_name, provider_id }) {

    const theIcon = () => {
        if(provider_name==="Google"){
            console.log("it matches Google")
            return ("Google")
        }else{
            console.log("it matches something else that is :", provider_name)
            return (provider_name)
        }
    }
    //console.log(theIcon())
    
    //console.log("provider name : ",provider_name)
    //console.log(provider_name,"'s provider id is :",provider_id)

    return (
        <div className="flex mb-5" key={provider_name}>
                <div className="w-3">

                </div>
                <button className="flex justify-center place-items-center space-x-4 p-1 w-11/12 text-xs md:text-sm border border-gray-400 hover:border-gray-600 rounded-md focus:bg-gray-600 hover:bg-gray-200 focus:text-white" onClick={() => signIn(provider_id)}>
                    <div>
                        <img className="ml-3.5 w-8 " src={"/img/"+theIcon()+".svg"} alt="" />
                    </div>
                    <div>
                        <span className="left-4 text-lg md:text-md lg:text-sm">Sign in with {provider_name}</span>
                    </div>
                </button>
                
        </div>
    )
}

export default Loginbutton
