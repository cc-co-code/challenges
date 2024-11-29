import useSWR from "swr";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AllListingPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>
              Price: {product.price} {product.currency}
            </p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
