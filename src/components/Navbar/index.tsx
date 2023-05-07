/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "../../context/UserContext";
import Menuburger from "../Menuburger";
import { TPage } from "../../types/apiTypes";

interface IProps {
  pages: TPage[];
}

export default function Navbar({ pages }: IProps) {
  // change nav color on scrolling
  const { isAuth, signOut } = useAuth();
  const [color, setColor] = useState(false);

  const router = useRouter();

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
    }
  }, []);

  return (
    <nav
      className={
        color
          ? "fixed top:0 bg-primary_bg z-50 h-20 flex justify-between w-screen text-primary_font text-lg"
          : "fixed top:0 bg-transparent z-50 h-20 flex justify-between w-screen text-primary_font text-lg"
      }
    >
      {/* Check if one of the pages fetched as a title Homepage. If yes, it will appear as the first link using the "Home" icon */}

      <div className="md:flex absolute">
        <Menuburger pages={pages} />
      </div>

      <ul className="w-1/3 invisible flex items-center md:px-4 md:visible">
        {pages.filter((page: TPage) => page.title === "Homepage").length > 0 ? (
          <button
            type="button"
            onClick={() =>
              router.push(
                `/pages/${
                  pages.filter((page: TPage) => page.title === "Homepage")[0]!
                    .id
                }`
              )
            }
          >
            <Image
              src="/home_logo.svg"
              width={25}
              height={25}
              alt="logo home"
            />
          </button>
        ) : (
          ""
        )}

        {pages
          .filter((page: TPage) => page.title !== "Homepage")
          .map((page: TPage) => (
            <button
              key={page.id}
              type="button"
              onClick={() => router.push(`/pages/${page.id}`)}
              className="px-2"
            >
              {page.title}
            </button>
          ))}
      </ul>
      <Image
        src="/wyw_logo.svg"
        width={150}
        height={200}
        alt="logo"
        className="hidden md:flex"
      />
      <div className="w-1/3 flex">
        <div className="w-2/3 flex">
          <ul className="flex items-center">
            {isAuth === true ? (
              <>
                {" "}
                <button
                  type="button"
                  onClick={() => router.push("/favorites")}
                  className="hidden px-5 md:flex"
                >
                  Favorites
                </button>
              </>
            ) : (
              ""
            )}
            <li>
              <button
                type="button"
                onClick={() => router.push("/search")}
                className="hidden px-5 md:flex"
              >
                <Image
                  src="/logo_search.png"
                  width={24}
                  height={24}
                  alt="logo search"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="w-2/3 md:w-1/3 grid place-items-center border-2 m-4 border-primary_font">
          {isAuth ? (
            <button
              onClick={signOut}
              type="button"
              className="text-sm md:text-lg"
            >
              LOG OUT
            </button>
          ) : (
            <Link className="text-sm md:text-lg" href="/auth/signin">
              LOG IN
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
