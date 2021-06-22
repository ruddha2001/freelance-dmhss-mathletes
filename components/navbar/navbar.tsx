import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="w-full bg-primary text-white flex justify-between items-center">
      <div className="flex items-center">
        <figure>
          <Image src={logo} width={logoSize} height={logoSize} />
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
      <div>Hello</div>
    </div>
  );
}
