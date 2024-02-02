"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function HomePage() {

  const { status, data } = useSession();  

  console.log(status);

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        {!data?.user && ( 
          <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}