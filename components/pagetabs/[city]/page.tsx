"use client";

const cities = ["London", "Paris", "Tokyo", "Oslo"];
export default function ({ params }: { params: { city: string } }) {
  let colors: { [key: string]: string } = {};
  colors.london = "bg-red-600";
  colors.paris = "bg-green-600";
  colors.tokyo = "bg-blue-600";
  colors.oslo = "bg-orange-600";

  return (
    <div className={`${colors[params.city.toLowerCase()]} h-screen`}></div>
  );
}
