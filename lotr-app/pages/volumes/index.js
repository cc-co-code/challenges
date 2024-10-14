import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
export default function VolumesPage() {
  const router = useRouter();
  const handleRandomClick = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  };
  return (
    <div>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomClick}>Random Value</button>
    </div>
  );
}
