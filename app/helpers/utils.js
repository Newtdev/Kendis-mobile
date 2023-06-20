import currencyjs from 'currency.js';

export const formatCurrency = amount => {
  console.log('amount', amount);
  return currencyjs(amount || 0, {symbol: 'N'}).format();
};
