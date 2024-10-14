import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>Explore all the volumes of The Lord of the Rings:</p>
      <Link href="/volumes">Go to Volumes</Link>
    </div>
  );
}
