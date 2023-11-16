import {Medal} from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import googleFont, {Poppins} from "next/font/google";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils"

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
})

const textFont = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '700', '800', '900']
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-cyan-100 text-cyan-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2"></Medal>
                    No 1 task management
                </div>
                <h1 className="text-3xl text-center md:text-6xl text-neutral-800 mb-6">Taskify helps team move</h1>
                <div className="text-3xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 pb-3 rounded-md w-fit">Work forward</div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, inventore ipsam pariatur repellendus soluta vero! Dolores ducimus magni quisquam quo.
            </div>
            <Button className="mt-6" size="sm" asChild>
                <Link href="/sign-up">
                    Get taskfiy for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage;