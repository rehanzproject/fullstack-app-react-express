export function formatNumber(number) {
  return number.toLocaleString("id-US");
}
export function getTotalProduct(total){
    return total.reduce((value, item) => value + item.price * item.qty , 0)
}