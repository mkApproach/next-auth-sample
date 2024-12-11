"use client";

import { useSession } from "next-auth/react";
import { LogInButton } from "@/components/AuthButton"
import { LogOutButton } from "@/components/AuthButton";

export default function Home() {
  const { data: session } = useSession();
  console.log(session?.idToken); // ID トークンを sessionに格納できている

  return (
    <div className="w-full text-center">
      <h1 className="text-2xl my-12">Next Auth Google !!! 2024/12/11</h1>
      <LogInButton />
      <LogOutButton />

      <div>
        {!session && (
          <div>
            <p>Hi, please log in!</p>
          </div>
        )}
        {session && (
          <div>
            <p>Hi, {session.user?.email}!</p>
            <p> You logged in. </p>
          </div>
        )}
      </div>
    </div>
  );
}