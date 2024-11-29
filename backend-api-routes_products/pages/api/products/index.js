import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const products = getAllProducts();

  return res.status(200).json(products);
}
