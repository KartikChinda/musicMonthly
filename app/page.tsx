"use client";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Animator from "@/components/Animator";
import { signOut } from "next-auth/react";
import MobileA from "@/components/mobileComponents/MobileA";
import IntroMobile from "@/components/IntroMobile";


export default function Home() {
  return (
    <main>
      <div className="flex justify-between">
        Easter egg: Hi
        <button onClick={() => { signOut() }} >SignoutButton</button>
      </div>
      <div className=" lg:hidden flex flex-col justify-center items-center">
        <MobileA />
        <IntroMobile />

      </div>
      <div className="hidden lg:block">
        <Hero />
        <Animator />
        <Intro />
      </div>

    </main>
  );
}
