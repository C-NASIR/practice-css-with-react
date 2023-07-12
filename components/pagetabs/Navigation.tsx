import Link from "next/link";
import { usePathname } from "next/navigation";
const cities = ["London", "Paris", "Tokyo", "Oslo"];

let colors: { [key: string]: string } = {
  london: "bg-red-600",
  paris: "bg-green-600",
  tokyo: "bg-blue-600",
  oslo: "bg-orange-600",
};

export default function () {
  const param = usePathname().slice(1).toLowerCase();

  return (
    <nav>
      <ul className="text-lg grid grid-cols-4 w-full fixed top-0 bg-white">
        {cities.map((city) => (
          <Link
            href={`/${city}`}
            key={city}
            className={`inline-block p-4 ${
              param === city.toLocaleLowerCase() &&
              colors[param] + " text-white"
            }`}
          >
            <li>{city}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
