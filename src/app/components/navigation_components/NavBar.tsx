import Link from "next/link";
import Container from "../Container";

import { Gruppo } from 'next/font/google'
import { Input } from "@/components/ui/Input";


const titanOne = Gruppo({
    subsets: ['latin'],
    weight: '400'
})

const NavBar = () => {
    return (
        <div className="sticky top-0 w-full bg-blue-950 z-30 shadow-sm">
            <div className="py-6 px-6">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <Link href="/" className={`${titanOne.className} text-yellow-300 text-2xl font-extrabold uppercase tracking-wider`}>
                            MANLY MOTORRAD</Link>
                        <div>
                            {/*to cgange login to account image*/}
                            <Link href="/signup" className="text-white px-5" >Log in</Link>

                            <Link href="/cart" className="text-white px-5" >Contact</Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-yellow-500 px-4 ">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <div >
                            <p className="text-white">ship to: </p>
                            <p className="text-blue-950">address of the user given during </p>
                        </div>
                        <div >
                            <Input disabled type="search" placeholder="Search"  className="px-12"/>
                        </div>
                        <div>
                            <Link href="/orderstatus" className="text-blue-950 px-5" >Order Status</Link>
                            <Link href="/categories" className="text-blue-950 px-5" >Categories</Link>
                            <Link href="/cart" className="text-blue-950 px-5" >Cart</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default NavBar;