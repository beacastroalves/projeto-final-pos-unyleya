export const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return formattedPrice;
  // const str = (+`${value}`).toFixed(2).replace('.', ',');
  // if (str.length <= 6) {
  //     return str;
  // }
  // const index = str.length - 6;
  // const thousands = str.substring(0, index);
  // const remainder = str.substring(index);

  // return `${thousands}.${remainder}`;
};