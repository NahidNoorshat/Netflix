"use client";

import { TestContext } from "@/components/ContextSignup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
// import Register from "./register/page";

const SignUpform = () => {
  const [newemail, setNewemail] = useState("");
  console.log(newemail);
  const router = useRouter();

  const { email, setEmail } = useContext(TestContext);

  const handlemail = (e) => {
    e.preventDefault();

    setEmail(newemail);

    router.push("/signup/register");
  };

  return (
    <div>
      <header className=" fixed top-0 left-0 w-full px-4 py-4 md:px-10 md:py-6 lg:px-40 lg:py-6 z-50 ">
        <div className="flex justify-between lg:mx-40">
          <img
            src="https://rb.gy/ulxxee"
            width={150}
            height={100}
            className="cursor-pointer object-contain"
          />
          <div className=" w-50 px-2 flex items-center my-1 rounded bg-[#e50914] font-semibold">
            <Link href="/signup/signin">Sign in</Link>
          </div>
        </div>
      </header>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-transparent">
        <Image
          src="https://rb.gy/p2hphi"
          alt="bg"
          layout="fill"
          className="-z-10 opacity-60"
          objectFit="cover"
        />
        <div className="space-y-5">
          <p className="text-white font-bold text-5xl flex flex-col items-center">
            <span>
              Unlimited movies, TV <br />
            </span>
            <span> shows and more. </span>
          </p>
          <p className="text-white font-semibold text-3xl flex flex-col items-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-lg flex flex-col items-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form action="" onSubmit={handlemail}>
            <div className="flex flex-row items-center justify-center">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                onChange={(e) => setNewemail(e.target.value)}
                required
                value={newemail}
                className="p-4 focus:outline-none text-black focus:ring-1 focus:ring-blue-300 w-3/4"
              />
              <div className="">
                <button
                  type="submit"
                  className="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white"
                >
                  Get Started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* This is farther content..  */}

      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="space-y-5 p-5">
          <p className="text-white font-bold text-4xl">Enjoy on your TV.</p>
          <p className="text-white font-semiboldbold text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div>
          <img
            alt="TV"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div>
          <img
            alt=""
            className="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            data-uia="our-story-card-img"
          />
        </div>
        <div className="space-y-5">
          <p className="text-white font-bold text-4xl">
            Download your shows to watch offline.
          </p>
          <p className="text-white font-semiboldbold text-xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="space-y-5 p-5">
          <p className="text-white font-bold text-4xl">Watch everywhere.</p>
          <p className="text-white font-semiboldbold text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <img
            alt=""
            className="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            data-uia="our-story-card-img"
          />
        </div>
      </div>
      <hr />
      <div className="h-screen flex items-center justify-center bg-black p-5">
        <div className="p-5">
          <img
            alt=""
            className="our-story-card-img"
            src="https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            data-uia="our-story-card-img"
          />
        </div>
        <div className="space-y-5">
          <p className="text-white font-bold text-4xl">
            Create profiles for children.
          </p>
          <p className="text-white font-semiboldbold text-xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <hr />
      <div className="min-h-screen bg-black space-y-10">
        <p className="p-5 text-white font-bold text-5xl flex justify-center">
          Frequently Asked Questions
        </p>
        <div className="space-y-5 flex flex-col justify-center items-center">
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">What is Netflix ?</p>
          </div>
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">How much does Netflix cost ?</p>
          </div>
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">Where can I watch ?</p>
          </div>
          <div className="p-5 bg-[#303030] w-3/4">
            <p className="text-3xl text-white">Is Netflix good for kids ?</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SignUpform;
