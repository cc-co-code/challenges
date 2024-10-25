import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(`/api/random-character`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Random character</h1>
      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Age: {data.age}</p>
      <p>Profession: {data.profession}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}
