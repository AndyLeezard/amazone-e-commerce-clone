import React, { useState } from 'react';
import { getProviders, useSession } from 'next-auth/client';
import Loginbutton from '../../components/Loginbutton';
import router from 'next/router';
import { auth } from '../../../firebase';

export default function signin({ providers}) {
  const [session] = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redoInfo, setRedoInfo] = useState(false);
  const [msg_error, setmsg_error] = useState('Incorrect information');

  if(session){
    console.log("SignIn Page: a NextAuth user is detected - go back to the main page")
    router.push('/')
  }

  const firebaseSignIn = e => {
    e.preventDefault()

    auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          router.push('/')
        })
        .catch(error => errorMsg(error.message))
  }

  const errorMsg = (e) => {
    setmsg_error(e);
    setRedoInfo(true);
  }

  return (
    <div className="text-center">
        <img onClick={() => router.push('/')} className="link mt-4 mx-auto w-6/12 sm:w-4/12 md:w-2/12 lg:w-1/12" src="/logo_side6_dark.svg" alt="" />
          <div className="mx-auto flex flex-col text-left w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 border rounded-md border-solid border-gray-300 p-5 w-300">
              <h1 className="text-left text-2xl font-semibold px-1 mb-2">
                Sign-In
              </h1>
                {redoInfo && ( <div className="border-2 border-solid border-red-200 bg-red-400 rounded-md p-1"><p className="text-white font-semibold text-xs">  {msg_error}</p></div> )}
                  <form method='post' action='/api/auth/signin/credentials'>
                    <label className="text-sm font-semibold mt-2 px-1">
                      Email address
                    <input type='text' className="w-full border border-solid border-gray-400 rounded-md px-1" value={email} onChange={e => setEmail(e.target.value)} placeholder="test@test.test" />
                    </label>
                    <label className="text-sm font-semibold mt-2 px-1">
                      Password
                      <input type='password' className="w-full border border-solid border-gray-400 rounded-md px-1" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button onClick={firebaseSignIn} className="mt-3 button w-full rounded-md font-semibold" type='submit' >Continue</button>
                  </form>
                  <p className="text-center mt-4 text-sm text-gray-600">
                      By signing-in, you agree to the "ÀMAZONE.LEE" <a href="/conditions">Conditions of Use</a>.
                  </p>
          </div>
          <div className="mx-auto mt-2">
            <h2 className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 border-t border-solid border-gray-300 mt-2.5 mb-2.5" ><span className="absoulte text-gray-600 text-sm bg-white pb-2.5">New to ÀMAZONE.LEE?</span></h2>
          </div>
          <div className="mx-auto w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 p-1">
            <button onClick={() => router.push('/signup')} className="p-2 w-11/12 text-xs md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 active:from-gray-500 font-semibold">Create your Àmazone account</button>
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
              <a href="/conditions"><p className="font-semibold text-indigo-700 text-sm">Conditions of Use</p></a>
              <a href="https://www.linkedin.com/in/andy-lee-4b913719a" target="_blank" rel="noopener noreferrer"><p className="font-semibold text-green-600 text-sm">Contact & Feedback</p></a>
        </div>
        <p className="font-semibold text-gray-600 text-sm my-4">© 2021 | Developed by Andy Lee</p>
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context){
  const providers = await getProviders()
  return {
    props: { providers }
  }
}