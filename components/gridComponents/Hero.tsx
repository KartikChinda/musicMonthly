"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-brown h-full flex flex-col gap-4 font-text justify-center items-start px-8 text-orange text-4xl font-extralight">
      <h2>Your music recap,</h2>
      <h1>
        <span className="font-extrabold text-6xl">"wrapped" </span>and delivered
      </h1>
      <h2>
        to you, <span className="font-extrabold text-6xl">monthly</span>.
      </h2>

      {!session ? (
        <Link
          href="/wegotauser"
          className="mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-2xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-[26px]"
        >
          Start your journey{" "}
        </Link>
      ) : (
        <div className="flex gap-2">
          <div className="mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-2xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-[26px]">
            <Link href={"/wrapped"}>Go check the wrapped again.</Link>
          </div>
          <div className="mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-2xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-[26px]">
            <button
              onClick={() => {
                signOut();
              }}
            >
              Signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
