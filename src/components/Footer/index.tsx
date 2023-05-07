import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-screen bg-footer text-white p-4  flex items-center justify-between h-16">
      <ul className="flex items-center">
        {/* <li className="border-r-2 px-2">
          <a href="http://www.google.com" className="hover:underline">
            COOKIES
          </a>
        </li> */}
        <li className="border-r-2 px-2">
          <a href="http://www.google.com" className="hover:underline">
            MENTIONS LEGALES
          </a>
        </li>
        {/* <li className="px-2">
          <a href="http://www.google.com" className="hover:underline">
            POLITIQUE DE CONFIDENTIALITE
          </a>
        </li> */}
      </ul>
      {/* <span>POWERED BY DEEV PURPLE TEAM</span> */}
      <ul className="flex items-center">
        <Link href="https://fr-fr.facebook.com/">
          <Image
            src="/facebook_logo.svg"
            width={30}
            height={30}
            alt="logo WYW"
          />
        </Link>
        <Link href="https://twitter.com/?lang=fr">
          <Image
            src="/twitter_logo.svg"
            width={30}
            height={30}
            alt="logo WYW"
          />
        </Link>
        <Link href="https://www.instagram.com/?hl=fr">
          <Image
            src="/instagram_logo.svg"
            width={30}
            height={30}
            alt="logo WYW"
          />
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
