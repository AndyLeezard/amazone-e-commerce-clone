import React, { useState, useEffect } from "react";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { db, auth } from '../../firebase';

function Header() {
    const [username, setUsername] = useState('');

    const [session] = useSession();
    const router = useRouter();
    const firebaseUser = auth.currentUser;
    const items = useSelector(selectItems);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
          console.log('Firebase Auth User >>>', authUser);
    
          if(authUser) {
            // the user just logged in / the user was logged in.
            console.log("Firebase Auth user detected, authUser email :",authUser.email)
            db
            .collection('users') //select(create) a firestore collection named users
            .doc(authUser.email) //fetch the user data and register it inside the collection
            .get()
            .then((doc) => {
                if (doc.exists) {
                    //console.log("Document data:", doc.data().username);
                    setUsername(doc.data().username);
                    console.log("The Firebase Auth User's name is :",username)
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
          }else{
            setUsername('Guest');
            // the user is logged out.
          }
        })
      }, [])

    if(firebaseUser){
        if(session){
            console.log('WARNING - Double auth detected');
        }
    }

    const handleSignOutOrIn = e => {
        console.log("Header: handleSignOut invoked.")
        e.preventDefault()
        const fbuser = auth.currentUser;
        if(fbuser || session){
            if(fbuser){
                console.log("Header: signout from firebase")
                auth.signOut();
                location.reload();
              }
            if(session){
                console.log("Header: signout from NextAuth")
                signOut();
            }
        }else{
            signIn();
        }
    }

    const RenderSignoutIf = () => {
        const fbuser = auth.currentUser;
        if(fbuser || session){
            console.log("Header: at least one acc is detected, render sign out option")
            return "Sign out"
        }
        return "Sign in"
    }
    
    const HandleClikingOrders = () => {
        const fbuser = auth.currentUser;
        if(fbuser || session){
            router.push('/orders')
        }else{
            signIn();
        }
    }

    return (
        <header className="sticky top-0 z-50">
            
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <a href="#top">
                <div className="flex items-center flex-grow sm:flex-grow-0">
                    <img className="object-contain mx-2 cursor-pointer"
                        onClick={() => router.push('/')}
                        src='/logo_side6.svg'
                        width={150}
                        height={40}
                    />
                </div>
                </a>
                <div className="hidden lg:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon onClick={() => router.push('/under_construction')} className="h-12 p-4"/>
                </div>
                {/* Right Section */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    
                    
                    <div onClick={handleSignOutOrIn} className="link">
                        <p className="text-lg line-clamp-1">{session ? `Hello, ${session.user.name}`: `Hello, ${username}`}</p>
                        <p className="font-extrabold md:text-sm">{RenderSignoutIf()}</p>
                    </div>

                    <div onClick={HandleClikingOrders} className="link">
                        <p className="text-lg">Orders </p>
                        <p className="font-extrabold md:text-sm">{session ? `& returns`: ""}</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-lg mt-2">Cart</p>
                    </div>
                </div>
            </div>
            {/* Phone Search */}
            <div className="flex lg:hidden xl:hidden 2xl:hidden items-center bg-amazon_blue p-4 flex-grow py-2">
                <div className="flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500">
                        <input className="p-2 h-full w-2 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                        <SearchIcon className="h-12 p-4"/>
                </div>
            </div>
            {/* Bottom nav*/}
            <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"  onClick={() => router.push('/under_construction')}>
                    <MenuIcon className="h-6 mr-1" />
                    All</p>
                <p className="link" onClick={() => router.push('/under_construction')}>Prime Video</p>
                <p className="link" onClick={() => router.push('/under_construction')}>Àmazone Business</p>
                <p className="link" onClick={() => router.push('/under_construction')}>Today's Deals</p>
                <p className="link hidden lg:inline-flex" onClick={() => router.push('/under_construction')}>Electronics</p>
                <p className="link hidden lg:inline-flex" onClick={() => router.push('/under_construction')}>Food & Grocery</p>
                <p className="link hidden lg:inline-flex" onClick={() => router.push('/under_construction')}>Prime</p>
                <p className="link hidden lg:inline-flex" onClick={() => router.push('/under_construction')}>Buy Again</p>
                <p className="link hidden lg:inline-flex" onClick={() => router.push('/under_construction')}>Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex" onClick={() => router.push('/under_construction')}>Health & Personal Care</p>
            
            </div>
            
        </header>
    )
}

export default Header;
