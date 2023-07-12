import { useState } from "react";

export default function () {
  const [show, setShow] = useState(false);
  return (
    <div
      className=" ml-5 mt-3 inline-block cursor-pointer"
      onClick={() => setShow((value) => !value)}
    >
      <div
        className={`w-10 h-1 bg-black my-1.5 transition ${
          show && " translate-y-2.5 -rotate-45"
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-black my-1.5 transition ${show && "opacity-0"}`}
      ></div>
      <div
        className={`w-10 h-1 bg-black my-1.5 transition ${
          show && " -translate-y-2.5 rotate-45"
        }`}
      ></div>
    </div>
  );
}
