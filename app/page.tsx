"use client";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Animator from "@/components/Animator";
import { signOut } from "next-auth/react";
import MobileA from "@/components/mobileComponents/MobileA";


export default function Home() {
  return (
    <main>
      <div className="flex justify-between">
        Easter egg: Hi
        <button onClick={() => { signOut() }} >SignoutButton</button>
      </div>
      <div className=" xl:hidden flex justify-center items-center">
        <MobileA />
      </div>
      <div className="hidden xl:block">
        <Hero />
      </div>
      <Animator />
      <Intro />
    </main>
  );
}
