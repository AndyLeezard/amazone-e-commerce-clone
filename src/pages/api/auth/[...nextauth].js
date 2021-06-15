import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { FirebaseAdapter } from "@next-auth/firebase-adapter"

import firebase from "firebase/app"
import "firebase/firestore"

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(
    {apiKey: "AIzaSyAekKRPD9FivPKND33QXPTwPZ21kxn7vfc",
      authDomain: "new-e-abd00.firebaseapp.com",
      projectId: "new-e-abd00",
      storageBucket: "new-e-abd00.appspot.com",
      messagingSenderId: "905130006151",
      appId: "1:905130006151:web:245288fa448af888510a22",
      measurementId: "G-GXHB6VTQGE"})
).firestore()

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        name: { label: "email", type: "email", placeholder: "test@test.test" },
        password: { label: "pw", type: "password" }
      },
      async authorize(credentials, req) {
        //const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address) 

        console.log("credentials are :",credentials)
        console.log(credentials.name)
    
          //is a new form
          /*const makeSession = {
              id : 1,
              name : name,
              email: email
          }*/
          const user  = JSON.stringify(credentials);
          return user
        
        /*res.status(200).json(makeSession);

        const res = await fetch("/api/custom-provider", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })*/
        //const user = await res.json(makeSession)
        
        // If no error and we have user data, return it
        /*if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null*/
      }
    }),
    Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
    Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
      
    // ...add more providers here
  ],
  adapter: FirebaseAdapter(firestore),
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/welcome' // If set, new users will be directed here on first sign in
  },
  session: {
    jwt: true,
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  theme: 'auto',
})