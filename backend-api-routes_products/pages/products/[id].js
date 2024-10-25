import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log("Product ID:", id);
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading..</div>;

  const { name, category, description, price, currency } = data;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {name}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
      </p>
    </div>
  );
}
