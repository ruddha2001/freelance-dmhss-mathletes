import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.png";

export default function Navbar() {
  const [logoSize, setLogoSize] = useState(88);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 700) {
      setLogoSize(100);
    } else if (width <= 1200) {
      setLogoSize(150);
    }
  }, []);

  return (
    <div className="w-full bg-primary text-white flex justify-between items-center sticky top-0">
      <div className="flex items-center font-bold">
        <figure>
          <Image
            src={logo}
            width={logoSize}
            height={logoSize}
            alt="DMHSS Logo"
          />
        </figure>
        <p>
          <span className="text-lg md:text-2xl lg:text-3xl">
            Douglas Memorial Higher Secondary School
          </span>
          <br />
          <span className="text-sm">
            52, Barrack Road, Barrackpore, Kolkata - 700120
          </span>
        </p>
      </div>
      <div className="hidden lg:block">
        <Link href="/#events">
          <a className="mx-8 text-xl cursor-pointer">Events</a>
        </Link>
        <Link href="/#faqs">
          <a className="mx-8 text-xl cursor-pointer">FAQs</a>
        </Link>

        <span className="rounded-2xl bg-yellow-500 text-black p-3 text-xl mx-5 cursor-pointer">
          Register
        </span>
      </div>
    </div>
  );
}
