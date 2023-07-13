"use client";

import Link from "next/link";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function () {
  const [show, setShow] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: { width: "0" },
  }));

  function toggle() {
    setShow((s) => {
      if (show)
        api.start({
          from: {
            width: "100%",
          },
          to: {
            width: "0",
          },
        });
      else
        api.start({
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        });
      return !s;
    });
  }

  return (
    <div className="w-full h-screen">
      <animated.div
        style={{ animationDelay: "10s", ...springs }}
        className="bg-[rgba(0,0,0,0.5)]  text-white h-screen transition duration-75 fixed top-0 left-0 overflow-hidden"
      >
        <a href="#" className="block pt-5 absolute right-1" onClick={toggle}>
          Close
        </a>
        <a href="#" className="block pt-5">
          About
        </a>
        <a href="#" className="block pt-5">
          Service
        </a>
        <a href="#" className="block pt-5">
          Contact
        </a>
        <a href="#" className="block pt-5">
          Client
        </a>
      </animated.div>

      <div className="p-3 cursor-pointer" onClick={toggle}>
        <div className="h-1 w-9 bg-black mb-1"> </div>
        <div className="h-1 w-9 bg-black mb-1"> </div>
        <div className="h-1 w-9 bg-black mb-1"> </div>
      </div>
    </div>
  );
}
