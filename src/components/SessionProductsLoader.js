import ProductLoader from "../loaders/unit";

export const productLoader = async () => {
  let products = JSON.parse(sessionStorage.getItem("products")); ;
  if (!products) {
    // Fallback to ProductLoader if session storage is empty
    products = await ProductLoader(); // Ensure ProductLoader is an async function
    sessionStorage.setItem("products", JSON.stringify(products));
    return products
  } 
  return products
  
  
};