import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { Input } from "../input";

export function Header () {
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
                    <button>
                        <RxAvatar size={26} color="#F87439" />
                    </button>
                    <button>
                        <FiLogOut size={26} color="#F87439" />
                    </button>
                </div>
            </div>
        </header>
    )
}