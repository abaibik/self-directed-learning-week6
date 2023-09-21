import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function City() {
  const router = useRouter();
  const currentCity = router.query;

  if (!currentCity) {
    return null;
  }

  const cityInfo = cities.find(({ slug }) => slug === currentCity.slug);

  if (!cityInfo) {
    return null;
  }

  const { name, country, population, description } = cityInfo;

  return (
    <>
      <Link href="/cities">⬅ Back to all cities</Link>
      <h1>{name}</h1>

      <p>
        A city in {country} with a population of {population} people.
      </p>

      <p>{description}</p>
    </>
  );
}
