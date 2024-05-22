"use client";

import React, { useContext, useState } from "react";
import { TestContext } from "@/components/ContextSignup";
import Link from "next/link";
const page = () => {
  const { email, password, signUp } = useContext(TestContext);

  const registerhandle = async () => {
    await signUp(email, password);
  };
  return (
    <div className=" bg-white text-black h-[100vh] w-full">
      <div className="flex mx-5 px-2 py-6 md:px-8 md:py-8 items-center justify-between relative border-b border-gray-300">
        <img
          src="https://rb.gy/ulxxee"
          width={80}
          height={60}
          className="cursor-pointer object-contain md:w-[150px] md:h:auto"
        />
        <Link href="/signup/signin" className=" font-semibold text-[20px] ">
          Sign In
        </Link>
        <span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-gray-300"></span>
      </div>
      <div className=" block pb-[95px]">
        <div className=" px-8 pb-16 pt-5 lg:mx-64  ">
          <div className=" sm:max-w-md text-left block">
            <div className="mt-5 text-left">
              <h1 className="mb-[12px] text-4xl font-semibold">
                <span>Account will create at this email name.</span> <br />
              </h1>
            </div>

            <div className="flex flex-col gap-3">
              <h1>Email</h1>
              <p className=" font-semibold "> {email} </p>

              <form action="" className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={registerhandle}
                  className="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
