"use client";
import Navigation from "../../Navigation";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
