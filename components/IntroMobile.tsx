import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Pictures from "./gridComponents/Pictures";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const IntroMobile = () => {
  const { data: session } = useSession();
  const handleSignOut = async () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {/* animator for mobile */}

      <div>
        <div className=" h-[20vh] md:h-[40vh] w-full bg-black "></div>

        <div className="h-[90vh] w-[95vw] m-4 md:m-20 rounded-xl bg-[#EDE0D0] flex justify-center items-center group">
          <h1 className="text-[#3C2A21] text-4xl md:text-7xl 2xl:text-9xl font-bebas group">
            I got{" "}
            <span className="text-orange text-[160px] duration-150">you</span>,
            boo.{" "}
          </h1>
        </div>
        <div className=" h-[20vh] md:h-[40vh] w-full bg-black "></div>
      </div>
      <div className=" w-[95vw] m-4 md:m-20 rounded-xl bg-[#EDE0D0] flex flex-col justify-center items-center group p-4 gap-6">
        <div className="font-bebas text-6xl text-center text-brown mt-10 font-black md:text-[8xl]">
          Music Monthly
        </div>
        <div className="w-[90vw] md:w-[60vw] p-4 mt-10 flex flex-col gap-6 justify-center items-center">
          <div className="bg-brown h-full flex flex-col gap-4 font-text w-full justify-center items-start px-8 text-orange text-4xl font-extralight rounded-xl p-4">
            <h2>Your music recap,</h2>
            <h1>
              <span className="font-extrabold ">"wrapped" </span>and delivered
            </h1>
            <h2>
              to you, <span className="font-extrabold">monthly</span>.
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

          {/* the photos section */}
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Pictures />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="col-span-1 row-span-1 border-2 bg-brown text-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-2 group">
              <h1 className="font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200">
                Certified <br /> bops you <br />
                listened to.
              </h1>
              <p className="text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200">
                Get a list of bangers you could not stop from pouring through
                your headphones. The top songs you listened to, curated in one
                place.
              </p>
            </div>
            <div className="col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4">
              <h1 className="font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200">
                Artists who <br /> spoke to you. <br />
                And for you.
              </h1>
              <p className="text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200">
                These voices haunted your daydreams, soothed your nightmares.
                The top artists you listened to each month, served hot.
              </p>
            </div>
            <div className="col-span-1 row-span-1 border-2 bg-brown text-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4">
              <h1 className="font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200">
                Stats, visualized.
              </h1>
              <p className="text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200">
                I'm just going to say it. I like my information served on a
                visually stunning page. Get your recap designed beautifully.{" "}
                <br /> You flaunt your music, I flaunt my design.
              </p>
            </div>
            <div className="col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4">
              <h1 className="font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200">
                Bangers to <br /> add to your playlists.
              </h1>
              <p className="text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200">
                New songs? Based on your music taste? For you to listen to? Each
                month? *impersonates Clay Davis from the Wire* <br />{" "}
                shiieee----t.{" "}
              </p>
            </div>
            <div className="col-span-1 row-span-1 border-2 bg-brown text-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4">
              <h1 className="font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200">
                Lana girl, or a <br />
                Radiohead boy?{" "}
              </h1>
              <p className="text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200">
                Discover your music personality through the genres that define
                your listening habits, and reveal the soundtrack to your inner
                vibe. <br /> (chatGPT wrote this)
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-full bg-brown rounded-xl flex p-4 gap-8 text-orange justify-center items-center text-4xl group duration-150">
              <Link
                href={"https://github.com/KartikChinda/musicMonthly"}
                className="hover:text-5xl duration-150"
              >
                {" "}
                <FaGithubSquare />
              </Link>
              <Link
                href={"https://twitter.com/ChindaKartik"}
                className="hover:text-5xl duration-150"
              >
                {" "}
                <FaSquareXTwitter />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/kartikchinda"}
                className="hover:text-5xl duration-150"
              >
                {" "}
                <FaLinkedin />
              </Link>
              <Link
                href={"https://www.instagram.com/kartik.chinda11"}
                className="hover:text-5xl duration-150"
              >
                {" "}
                <TiSocialInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroMobile;
