export interface ProductData {
  data: {
    id: number;
    productImgPath: string;
    productName: string;
    brandName: string;
    productDescription: string;
    releaseDate: string;
  };
}

export type ProductList = ProductData[];
