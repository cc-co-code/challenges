import dbConnect from "@/db/model/connect";
import Product from "@/components/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const Product = await Product.find();
    return response.status(200).json(Product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
