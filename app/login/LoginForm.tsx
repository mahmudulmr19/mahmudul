"use client";
import React, { FormEvent, ChangeEvent, useState } from "react";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const query = useSearchParams();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const from = query.get("next") || "/dashboard/home";
        toast.success("Login successfully!");
        router.push(from);
      })
      .catch((err) => {
        console.clear();
        toast.error(err.code);
      });
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
      <Toaster position="top-right" />
      <div className="space-y-2">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
          placeholder="Email"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
          placeholder="Password"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-[#3ccf91] hover:bg-[#35bb83] transition-all py-2 rounded"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
