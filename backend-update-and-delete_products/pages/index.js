import ProductList from "../components/ProductList";
import styled from "styled-components";
import ProductForm from "../components/ProductForm";
import useSWR from "swr";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

const handleAddProduct = async (productData) => {
  const { mutate } = useSWR("/api/products");
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    } else {
      console.error("Error with adding products");
    }
  } catch (error) {
    console.error("Fehler:", error);
  }
};
export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} />
      <hr />
      <ProductList />
    </>
  );
}
