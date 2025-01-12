export default async function ProductLoader() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (!response.ok) {
      throw new Error("Server error occurred while fetching products.");
    }
    const product = await response.json();
    console.log("render")
    return product;
  } catch (error) {
    console.log(error.message);
    throw error
  
  }
}
