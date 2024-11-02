// 日付文字列をDateオブジェクトにして、計算できるように数値型に変換する関数
const convertToDate = (dateString: string) => {
  return new Date(dateString).getTime();
};

export default convertToDate;
