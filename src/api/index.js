export const getProducts = async () => {
  const request = await fetch('https://fakestoreapi.com/products')
  return await request.json();
}
export const getProduct = async (id) => {
  const request = await fetch(`https://fakestoreapi.com/products/${id}`)
  return await request.json();
}