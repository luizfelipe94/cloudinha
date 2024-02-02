"use client";

import { Container } from "@/components/container";
import { useSession } from "next-auth/react";

export default function Profile() {

    const { data } = useSession();

    return (
        <Container>
            <div className="rounded-lg border shadow-lg p-10">
            <div>
                Id : {data?.user.id}
            </div>
            <div>
                Name : {data?.user.name}
            </div>
            <div>
                Email : {data?.user.email}
            </div>
            </div>
        </Container>
    );
}