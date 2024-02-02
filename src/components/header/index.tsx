"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { redirect, useRouter } from "next/navigation";

export function Header () {

    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/login" });
    }

    return (
        <header className="w-full flex items-center px-2 h-14 border-b-2 border-orange-500">
            <div className="w-full flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-1xl pl-1 hover:tracking-widest duration-300">
                        <span className="text-orange-500">CLOUDINHA </span>CONSOLE
                    </h1>
                </Link>

                <div className="flex w-2/5">
                    <input
                    className="w-full border rounded-sm h-11 px-2"
                    type="text"
                    id="searchbar"
                    placeholder="Search resources..."
                    />
                </div>
                <div className="flex gap-5">
                    <button onClick={() => router.push("/profile")}>
                        <RxAvatar size={26} color="#F87439" />
                    </button>
                    <button onClick={handleLogout}>
                        <FiLogOut size={26} color="#F87439" />
                    </button>
                </div>
            </div>
        </header>
    )
}