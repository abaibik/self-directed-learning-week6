import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>This is a Cities App.</h1>
      <Link href="/cities">To the cities ➡</Link>
    </>
  );
}
