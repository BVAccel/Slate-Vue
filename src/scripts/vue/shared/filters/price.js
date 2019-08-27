export default (value, currency = '$') => {
  value = +value;

  const integer = parseInt(value / 100);
  let decimals = value % 100;
  decimals = decimals < 10 ? '0' + decimals : decimals;

  return `${currency}${integer}.${decimals}`;
}