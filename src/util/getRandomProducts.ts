import type { ProductList } from "src/types/products";

const getRandomProducts = (
  products: ProductList,
  count?: number,
): ProductList => {
  const _shuffledProductList = (products: ProductList) => {
    return products.sort(() => {
      return Math.random() - 0.5;
    });
  };

  return count
    ? _shuffledProductList(products).slice(0, count)
    : _shuffledProductList(products);
};

export default getRandomProducts;
