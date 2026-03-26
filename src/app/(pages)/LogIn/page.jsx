"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/Context/UserContext";
import Link from "next/link";

export default function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserLoged } = useContext(UserContext);
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) {
      setUserLoged(true);
      document.cookie = "token=123; path=/";

      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");

      router.replace(redirect || "/");
    } else {
      alert("Please enter email and password");
    }
  }

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="p-10 rounded-2xl shadow-2xl w-[350px]">
        <h2 className="text-center text-3xl font-semibold">
          Welcome Back !
        </h2>

        <p className="text-center mt-2">
          Enter your credentials
        </p>

        <form onSubmit={handleLogin}>
          <label className="block font-semibold mt-5">Email</label>
          <input
            type="email"
            className="w-full py-2 px-2 rounded-2xl mt-2 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block font-semibold mt-5">Password</label>
          <input
            type="password"
            className="w-full py-2 px-2 rounded-2xl mt-2 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="font-semibold w-full py-3 mt-5 rounded-3xl text-white bg-emerald-700 cursor-pointer"
          >
            LogIn
          </button>

          <div className="flex gap-2 justify-center mt-3 text-gray-500">
            <p className="font-semibold">Already have an account?</p>
            <Link className="font-semibold text-emerald-700" href={`/SignUp`}>
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}