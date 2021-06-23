import React from "react";
import Image from "next/image";
import AniruddhaLogo from "../../public/aniruddha.png";

export default function Credits() {
  return (
    <div className="w-full text-center text-sm md:text-base my-5">
      <p>This website is designed, developed and maintained by</p>
      <table
        className="mx-auto cursor-pointer"
        title="Aniruddha Chatterjee | Software Developer"
        onClick={() => {
          window.open("https://aniruddha.net");
        }}
      >
        <tbody>
          <tr>
            <td className="align-middle pr-2">
              <Image src={AniruddhaLogo} height={40} width={40} alt="AC" />
            </td>
            <td className="align-baseline pt-2 font-mono">
              Aniruddha Chatterjee
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
