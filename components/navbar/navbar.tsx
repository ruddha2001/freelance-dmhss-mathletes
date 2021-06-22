import React, { useState, useEffect } from "react";
import Image from "next/image";

import logo from "../../public/logo.png";

export default function Navbar() {
  const [logoSize, setLogoSize] = useState(88);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 700) {
      setLogoSize(150);
    } else if (width <= 1200) {
      setLogoSize(200);
    }
  }, []);

  return (
    <div className="w-full bg-primary sticky">
      <div className="col-span-1">
        <table
          style={{ color: "white", width: "fit-content" }}
          className="border-collapse"
        >
          <tr className="font-bold">
            <td>
              <Image src={logo} width={logoSize} height={logoSize} />
            </td>
            <td>
              <span className="text-xl md:text-3xl">
                Douglas Memorial Higher Secondary School
              </span>
              <br />
              <span className="text-sm">
                52, Barrack Road, Barrackpore, Kolkata - 700120
              </span>
            </td>
            <td className="text-right hidden lg:block w-1/2">das</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
