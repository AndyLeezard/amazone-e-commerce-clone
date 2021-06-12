import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const [session] = useSession();
    const router = useRouter();

    const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="flex items-center flex-grow sm:flex-grow-0">
                    <img
                        onClick={() => router.push('/')}
                        src='logo_side6.svg'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="mx-2 cursor-pointer"
                    />
                </div>
                <div className="invisible lg:visible xl:visible 2xl:visible flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right Section */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn:signOut} className="link">
                        <p className="text-lg">{session ? `Hello, ${session.user.name}`: "Sign in"}</p>
                        <p className="font-extrabold md:text-sm">{session ? "Sign out": "No session"}</p>
                    </div>
                    <div onClick={()=> session && router.push('/orders')} className="link">
                        <p className="text-lg">Orders </p>
                        <p className="font-extrabold md:text-sm">& returns</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-lg mt-2">Basket</p>
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
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All</p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header;
