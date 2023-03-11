const CURRENCY_FORMATER =new Intl.NumberFormat(undefined, {
    currency:"USD",
    style:"currency",
});


const formatCurrency = (number) => {
  return CURRENCY_FORMATER.format(number)
};

export default formatCurrency;