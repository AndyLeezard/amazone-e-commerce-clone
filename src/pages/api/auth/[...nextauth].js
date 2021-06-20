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

const options = {
  providers: [
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
  // A database is optional, but required to persist accounts in a database
}

export default (req, res) => NextAuth(req, res, options);