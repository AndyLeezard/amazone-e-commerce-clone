import router from 'next/router'

function welcome() {
    return (
        <div className="text-center">
        <img onClick={() => router.push('/')} className="link mt-4 mx-auto w-12/12 sm:w-8/12 md:w-6/12 lg:w-4/12" src="/welcome.svg" alt="" />
            <div className="mx-auto flex flex-col text-left w-5/5 sm:w-4/5 md:w-3/5 lg:w-2/5 border rounded-md border-solid border-gray-300 p-5 w-300">
                <h1 className="text-center text-2xl font-semibold px-1 mb-2">
                We are glad to have you as our new member.
                </h1>
            </div>
        <div className="mx-auto mt-2">
          <h2 className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 border-t border-solid border-gray-300 mt-2.5 mb-2.5" ><span className="absoulte text-gray-600 text-sm bg-white pb-2.5">Are you ready to for a test drive?</span></h2>
        </div>
        <div className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 p-1">
          <button onClick={() => router.push('/')} className="p-2 w-11/12 text-xs font-bold md:text-sm bg-gradient-to-b from-green-200 to-green-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 active:from-gray-500">Let's get it !</button>
        </div>
        <div className="flex space-x-4 justify-center mx-auto mt-2 mb-4">
              <p>Conditions of Use</p>
              <p>Disclaimer</p>
              <p>Contact & Feedback</p>
        </div>
        <p className="mb-4">2021, developped and owned by Andy Lee</p>
    </div>
    )
}

export default welcome
