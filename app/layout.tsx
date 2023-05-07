import React, { ReactNode } from "react";
import "../styles/globals.css";
import { cookies } from "next/headers"; // Import cookies
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import UserContextProvider from "../src/context/UserContext";

type Props = {
  children: ReactNode;
};

const getAllPages = async () => {
  const token = cookies().get("token");
  const pages = await fetch(
    `${process.env.API_URL}/pages?display=true` || "apiurl",
    {
      credentials: "include",
      headers: {
        Authorization: token?.value as string,
      },
    }
  );
  const pagesJson = await pages.json();

  return pagesJson;
};

export default async function Layout({ children }: Props) {
  const pages = await getAllPages();

  return (
    <html lang="en">
      <head>
        <title>Whatever You Watch</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_logo_WYW.ico" />
      </head>
      <UserContextProvider>
        <body className="bg-primary_bg flex flex-col">
          <Navbar pages={pages} />
          <main className="flex-grow flex">{children}</main>
          <Footer />
        </body>
      </UserContextProvider>
    </html>
  );
}
