import React from "react";
import {Navbar} from "@/app/(marketing)/_components/navbar";
import {Footer} from "@/app/(marketing)/_components/footer";

const MarketingLayout = (
    {children}: { children: React.ReactNode }
) => {
    return <div className="h-full bg-neutral-800">

        <Navbar/>
        <main className="pt-40 pb-20 bg-amber-100">
            {children}
        </main>
        <Footer/>

    </div>
}

export default MarketingLayout;