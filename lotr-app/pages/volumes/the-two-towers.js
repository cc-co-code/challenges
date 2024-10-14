import { volumes } from "@/lib/data";
import Link from "next/link";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <a>{volume.description}</a>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}
