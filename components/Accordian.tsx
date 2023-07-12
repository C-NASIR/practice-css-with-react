"use client";

import { useState } from "react";

export default function () {
  const [show, setShow] = useState(false);
  return (
    <div className=" transition m-5">
      <button
        className="bg-[#eee] w-full  text-[#444] cursor-pointer  p-5 border-none  text-left text-[15] transition hover:bg-[#ccc] after:content-['\02795'] after:float-right"
        onClick={() => setShow((value) => !value)}
      >
        Section 1
      </button>
      <p className={` my-1 transition ${!show && "hidden"}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
