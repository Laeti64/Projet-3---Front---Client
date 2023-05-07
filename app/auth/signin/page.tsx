"use client";

import Link from "next/link";
import React from "react";
import { useAuth } from "../../../src/context/UserContext";

export default function Signin() {
  const { signIn } = useAuth();
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex justify-center items-center align-middle flex-col text-black flex-grow w-screen min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div>
        <h1 className="flex justify-center text-primary_font py-5 text-2xl">
          Login
        </h1>
      </div>
      <form className="flex space-y-5 flex-col justify-center">
        <div>
          <input
            className="px-2 py-1 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            autoComplete="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="py-5">
          <input
            className="px-2 py-1 rounded-lg"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <h6 className="flex justify-center text-primary_font text-xs">
            Need an account ?
            <ul>
              <li>
                <Link href="/auth/signup">SIGN UP</Link>
              </li>
            </ul>
          </h6>
        </div>
      </form>
      <div>
        <button
          className="text-primary_font bg-footer px-5 py-1 rounded-lg "
          type="submit"
          onClick={() => signIn(credentials)}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
