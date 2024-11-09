// src/productsディレクトリ配下のmdファイルを自動生成するためのスクリプト node.jsで実行
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs/promises";

// ここにデータを追加して実行
const products = [
  {
    id: 1,
    productImgPath: "clothes/clothes-1.jpg",
    productName: "商品名1",
    brandName: "ブランドA",
    productDescription: "高品質でデザインも良いです",
    releaseDate: "2022/01/15 12:30",
  },
  {
    id: 2,
    productImgPath: "clothes/clothes-2.jpg",
    productName: "商品名2",
    brandName: "ブランドB",
    productDescription: "スタイリッシュで快適",
    releaseDate: "2022/02/14 09:45",
  },
  {
    id: 3,
    productImgPath: "clothes/clothes-3.jpg",
    productName: "商品名3",
    brandName: "ブランドC",
    productDescription: "素材が非常に柔らかいです",
    releaseDate: "2022/03/23 14:20",
  },
  {
    id: 4,
    productImgPath: "clothes/clothes-4.jpg",
    productName: "商品名4",
    brandName: "ブランドD",
    productDescription: "カジュアルで毎日に最適",
    releaseDate: "2022/01/05 18:55",
  },
  {
    id: 5,
    productImgPath: "clothes/clothes-5.jpg",
    productName: "商品名5",
    brandName: "ブランドE",
    productDescription: "クールで快適な服です",
    releaseDate: "2022/04/12 11:05",
  },
  {
    id: 6,
    productImgPath: "clothes/clothes-6.jpg",
    productName: "商品名6",
    brandName: "ブランドA",
    productDescription: "耐久性があり長持ちします",
    releaseDate: "2022/02/20 15:30",
  },
  {
    id: 7,
    productImgPath: "clothes/clothes-7.jpg",
    productName: "商品名7",
    brandName: "ブランドB",
    productDescription: "毎日の使用に最適です",
    releaseDate: "2022/03/15 16:00",
  },
  {
    id: 8,
    productImgPath: "clothes/clothes-8.jpg",
    productName: "商品名8",
    brandName: "ブランドC",
    productDescription: "着心地が素晴らしいです",
    releaseDate: "2022/02/05 13:40",
  },
  {
    id: 9,
    productImgPath: "clothes/clothes-9.jpg",
    productName: "商品名9",
    brandName: "ブランドD",
    productDescription: "おしゃれなデザインです",
    releaseDate: "2022/01/29 08:30",
  },
  {
    id: 10,
    productImgPath: "clothes/clothes-10.jpg",
    productName: "商品名10",
    brandName: "ブランドE",
    productDescription: "品質が良く快適です",
    releaseDate: "2022/03/20 12:15",
  },
  {
    id: 11,
    productImgPath: "clothes/clothes-11.jpg",
    productName: "商品名11",
    brandName: "ブランドA",
    productDescription: "普段着にぴったり",
    releaseDate: "2022/04/03 10:50",
  },
  {
    id: 12,
    productImgPath: "clothes/clothes-12.jpg",
    productName: "商品名12",
    brandName: "ブランドB",
    productDescription: "素晴らしい着心地です",
    releaseDate: "2022/02/28 17:35",
  },
  {
    id: 13,
    productImgPath: "clothes/clothes-13.jpg",
    productName: "商品名13",
    brandName: "ブランドC",
    productDescription: "丈夫で長持ちします",
    releaseDate: "2022/01/18 19:20",
  },
  {
    id: 14,
    productImgPath: "clothes/clothes-14.jpg",
    productName: "商品名14",
    brandName: "ブランドD",
    productDescription: "柔らかく軽い素材です",
    releaseDate: "2022/03/08 16:10",
  },
  {
    id: 15,
    productImgPath: "clothes/clothes-15.jpg",
    productName: "商品名15",
    brandName: "ブランドE",
    productDescription: "動きやすい設計です",
    releaseDate: "2022/04/17 13:00",
  },
  {
    id: 16,
    productImgPath: "clothes/clothes-16.jpg",
    productName: "商品名16",
    brandName: "ブランドA",
    productDescription: "ファッション性抜群",
    releaseDate: "2022/02/07 09:15",
  },
  {
    id: 17,
    productImgPath: "clothes/clothes-17.jpg",
    productName: "商品名17",
    brandName: "ブランドB",
    productDescription: "シンプルで便利",
    releaseDate: "2022/01/30 15:45",
  },
  {
    id: 18,
    productImgPath: "clothes/clothes-18.jpg",
    productName: "商品名18",
    brandName: "ブランドC",
    productDescription: "とてもおしゃれです",
    releaseDate: "2022/03/10 11:25",
  },
  {
    id: 19,
    productImgPath: "clothes/clothes-19.jpg",
    productName: "商品名19",
    brandName: "ブランドD",
    productDescription: "軽くて丈夫なデザイン",
    releaseDate: "2022/04/01 18:30",
  },
  {
    id: 20,
    productImgPath: "clothes/clothes-20.jpg",
    productName: "商品名20",
    brandName: "ブランドE",
    productDescription: "シンプルで高品質",
    releaseDate: "2022/02/22 14:40",
  },
  {
    id: 21,
    productImgPath: "clothes/clothes-21.jpg",
    productName: "商品名21",
    brandName: "ブランドA",
    productDescription: "普段使いに最適",
    releaseDate: "2022/03/12 09:05",
  },
  {
    id: 22,
    productImgPath: "clothes/clothes-22.jpg",
    productName: "商品名22",
    brandName: "ブランドB",
    productDescription: "軽量で快適",
    releaseDate: "2022/01/23 11:55",
  },
  {
    id: 23,
    productImgPath: "clothes/clothes-23.jpg",
    productName: "商品名23",
    brandName: "ブランドC",
    productDescription: "日常使いにぴったり",
    releaseDate: "2022/02/09 16:30",
  },
  {
    id: 24,
    productImgPath: "clothes/clothes-24.jpg",
    productName: "商品名24",
    brandName: "ブランドD",
    productDescription: "毎日に最適な選択",
    releaseDate: "2022/03/05 13:45",
  },
  {
    id: 25,
    productImgPath: "clothes/clothes-25.jpg",
    productName: "商品名25",
    brandName: "ブランドE",
    productDescription: "シンプルで魅力的",
    releaseDate: "2022/04/14 10:15",
  },
  {
    id: 26,
    productImgPath: "clothes/clothes-26.jpg",
    productName: "商品名26",
    brandName: "ブランドA",
    productDescription: "質感が素晴らしい",
    releaseDate: "2022/01/26 18:10",
  },
  {
    id: 27,
    productImgPath: "clothes/clothes-27.jpg",
    productName: "商品名27",
    brandName: "ブランドB",
    productDescription: "軽くて持ち運びが楽",
    releaseDate: "2022/03/03 14:55",
  },
  {
    id: 28,
    productImgPath: "clothes/clothes-28.jpg",
    productName: "商品名28",
    brandName: "ブランドC",
    productDescription: "肌触りが良い",
    releaseDate: "2022/02/17 11:30",
  },
  {
    id: 29,
    productImgPath: "clothes/clothes-29.jpg",
    productName: "商品名29",
    brandName: "ブランドD",
    productDescription: "トレンドに合った服",
    releaseDate: "2022/04/09 13:25",
  },
  {
    id: 30,
    productImgPath: "clothes/clothes-30.jpg",
    productName: "商品名30",
    brandName: "ブランドE",
    productDescription: "着心地が良い",
    releaseDate: "2022/02/02 08:45",
  },
  {
    id: 31,
    productImgPath: "clothes/clothes-31.jpg",
    productName: "商品名31",
    brandName: "ブランドA",
    productDescription: "丈夫で長く使える",
    releaseDate: "2022/03/18 17:50",
  },
  {
    id: 32,
    productImgPath: "clothes/clothes-32.jpg",
    productName: "商品名32",
    brandName: "ブランドB",
    productDescription: "シンプルで便利な服",
    releaseDate: "2022/01/11 19:15",
  },
  {
    id: 33,
    productImgPath: "clothes/clothes-33.jpg",
    productName: "商品名33",
    brandName: "ブランドC",
    productDescription: "柔らかくて快適",
    releaseDate: "2022/04/05 15:10",
  },
  {
    id: 34,
    productImgPath: "clothes/clothes-34.jpg",
    productName: "商品名34",
    brandName: "ブランドD",
    productDescription: "軽量で丈夫",
    releaseDate: "2022/02/25 16:20",
  },
  {
    id: 35,
    productImgPath: "clothes/clothes-35.jpg",
    productName: "商品名35",
    brandName: "ブランドE",
    productDescription: "シンプルなデザイン",
    releaseDate: "2022/03/27 09:35",
  },
  {
    id: 36,
    productImgPath: "clothes/clothes-36.jpg",
    productName: "商品名36",
    brandName: "ブランドA",
    productDescription: "快適で高品質",
    releaseDate: "2022/04/23 14:00",
  },
];

// 指定されたディレクトリを削除
async function deleteDir(path) {
  const pathExists = await fs.stat(path).catch(() => false);
  if (!pathExists) return;

  try {
    await fs.rm(path, { recursive: true, force: true });
    console.log("ディレクトリを削除しました");
  } catch (err) {
    console.error("ディレクトリの削除に失敗しました", err);
  }
}

// 指定されたパスにディレクトリを作成
async function createDir(path) {
  try {
    await fs.mkdir(path, { recursive: true });
    console.log("ディレクトリを作成しました");
  } catch (err) {
    console.error("ディレクトリの作成に失敗しました", err);
  }
}

// 指定されたパスにファイルを作成
async function createFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log("ファイルを作成しました");
  } catch (err) {
    console.error("ファイルの作成に失敗しました", err);
  }
}

// 与えられたデータを文字列に変換
function convertTextData(data) {
  const textData = `
---
id: ${data.id}
productImgPath: ${data.productImgPath}
productName: ${data.productName}
brandName: ${data.brandName}
productDescription: ${data.productDescription}
releaseDate: ${data.releaseDate}
---
`;

  return textData.trim();
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const productsPath = join(__dirname, "../../content/products");

(async () => {
  await deleteDir(productsPath);
  await createDir(productsPath);
  for (let i = 0; i < products.length; i++) {
    const fileName = join(productsPath, `product-${products[i].id}.md`);
    const fileData = convertTextData(products[i]);
    await createFile(fileName, fileData);
  }
})();
