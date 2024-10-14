import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
export default function VolumesPage() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
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
