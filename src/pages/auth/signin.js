import { getProviders } from 'next-auth/client'
import Loginbutton from '../../components/Loginbutton'
import { getCsrfToken } from 'next-auth/client'
import router from 'next/router'

export default function signin({ providers, csrfToken }) {
  return (
    <div className="text-center">
        <img onClick={() => router.push('/')} className="link mt-4 mx-auto w-6/12 sm:w-4/12 md:w-2/12 lg:w-1/12" src="/logo_side6_dark.svg" alt="" />
        <div className="mx-auto flex flex-col w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 border rounded-md border-solid border-gray-300 p-5 w-300">
            <h1 className="text-left text-2xl font-semibold px-1">
              Sign-In
            </h1>
                <form className="" method='post' action='/api/auth/signin/email'>
                  <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
                  <h5 className="text-left text-sm font-semibold mt-2 px-1">
                    E-mail address
                  </h5>
                  <input className="w-full border border-solid border-gray-400" type='email' id='email' name='email'/>
                  <h5 className="text-left text-sm font-semibold mt-2 px-1">
                    Password
                  </h5>
                  <input className="w-full border border-solid border-gray-400" type='password' id='password' name='password'/>
                  <button className="mt-3 button w-full rounded-md" type='submit'>Continue</button>
                </form>
                <p className="mt-4 text-sm text-gray-600">
                    By signing-in, you agree to the "ÀMAZONE.LEE" conditions of Use.
                </p>
        </div>
        <div className="mx-auto mt-2">
          <h2 className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 border-t border-solid border-gray-300 mt-2.5 mb-2.5" ><span className="absoulte text-gray-600 text-sm bg-white pb-2.5">New to ÀMAZONE.LEE?</span></h2>
        </div>
        <div className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 p-1">
          <button className="p-2 w-11/12 text-xs md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 active:from-gray-500">Create your Àmazone account</button>
        </div>
        <div className="mx-auto mt-4">
          <h2 className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 border-t border-solid border-gray-300 mt-2.5 mb-2.5" ><span className="absoulte text-gray-600 text-sm bg-white pb-2.5">Easier options are available !</span></h2>
        </div>
        <div className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 p-1">
          {Object.values(providers).map(provider => (
            <Loginbutton
              provider_name={provider.name}
              provider_id={provider.id}
            />
          ))}
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

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context){
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken }
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}

        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
{Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
*/