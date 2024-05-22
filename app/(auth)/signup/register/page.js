"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TestContext } from "@/components/ContextSignup";

const Register = () => {
  const { email, password, setPassword } = useContext(TestContext);

  // const [pass, setNewpass] = useState();
  const router = useRouter();

  const handlepassword = (e) => {
    e.preventDefault();
    setPassword(password);
    router.push("/signup/setregister");
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
                <span>Welcome back!</span> <br />
                <span>Joining Netflix is easy.</span>
              </h1>
            </div>
            <div className=" text-lg">
              <span>
                Enter Your password and you'll be watching in no time.
              </span>
            </div>
            <div className="flex flex-col">
              <h1>Email</h1>
              <p> {email} </p>
              <form
                action=""
                className="flex flex-col gap-3"
                onSubmit={handlepassword}
              >
                <input
                  type="password"
                  name=""
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="typeurpass"
                  className=" p-4  focus:outline-none text-black focus:ring-1 focus:ring-blue-300 w-3/4"
                />
                <button
                  type="submit"
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

export default Register;
