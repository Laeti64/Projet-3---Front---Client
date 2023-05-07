/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { slide as Menu } from "react-burger-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../context/UserContext";
import { TPage } from "../../types/apiTypes";

interface IProps {
  pages: TPage[];
}

export default function Menuburger({ pages }: IProps) {
  const [isOpen, setOpen] = useState(false);
  const { isAuth } = useAuth();
  const router = useRouter();

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      width={170}
      noOverlay
      className=""
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      {pages.filter((page: TPage) => page.title === "Homepage").length > 0 ? (
        <button
          type="button"
          onClick={() => {
            router.push(
              `/pages/${
                pages.filter((page: TPage) => page.title === "Homepage")[0]!.id
              }`
            );
            closeSideBar();
          }}
          className="px-2"
        >
          Homepage
        </button>
      ) : (
        ""
      )}

      {pages
        .filter((page: TPage) => page.title !== "Homepage")
        .map((page: TPage) => (
          <button
            key={page.id}
            className="px-2"
            type="button"
            onClick={() => {
              router.push(`/pages/${page.id}`);
              closeSideBar();
            }}
          >
            {page.title}
          </button>
        ))}
      {isAuth === true ? (
        <>
          {" "}
          <button
            type="button"
            onClick={() => {
              router.push("/favorites");
              closeSideBar();
            }}
            className="px-2"
          >
            Favorites
          </button>
        </>
      ) : (
        ""
      )}
      <button
        type="button"
        onClick={() => {
          router.push("/search");
          closeSideBar();
        }}
        className="px-2"
      >
        Search
      </button>
    </Menu>
  );
}
