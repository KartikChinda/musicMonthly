"use client";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Animator from "@/components/Animator";
import { signOut } from "next-auth/react";


export default function Home() {
  return (
    <main>
      <div className="flex justify-between">
        Easter egg: Hi
        <button onClick={() => { signOut() }} >SignoutButton</button>
      </div>
      <Hero />
      <Animator />
      <Intro />
    </main>
  );
}
