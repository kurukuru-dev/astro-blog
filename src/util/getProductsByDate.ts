import type { ProductList } from "src/types/products";

export const getProductsByDate = (products: ProductList, count?: number) => {
  // 日付文字列をDateオブジェクトにして、計算できるように数値型に変換する関数
  const _convertToDate = (dateString: string) => {
    return new Date(dateString).getTime();
  };

  const sortedProducts = products.sort((a, b) => {
    return (
      _convertToDate(b.data.releaseDate) - _convertToDate(a.data.releaseDate)
    );
  });

  return count ? sortedProducts.slice(0, count) : sortedProducts;
};

export default getProductsByDate;
