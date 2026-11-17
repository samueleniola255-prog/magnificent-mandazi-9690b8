export const NGN_CURRENCY = { symbol: '₦', label: 'NGN' };

export const DEFAULT_CURRENCIES = [
  { symbol: '₦', label: 'NGN' },
  { symbol: '$', label: 'USD' },
  { symbol: '€', label: 'EUR' },
  { symbol: '£', label: 'GBP' },
  { symbol: '$', label: 'AUD' },
  { symbol: '¥', label: 'JPY' }
];

// 1 USD approx 1500 NGN
const NGN_EXCHANGE_RATE = 1500;

export const getPriceForCurrency = (prices, currencySymbol) => {
  if (!prices || !Array.isArray(prices) || prices.length === 0) {
    return {
      currency: currencySymbol === '₦' ? NGN_CURRENCY : { symbol: currencySymbol || '$', label: 'USD' },
      amount: 0
    };
  }

  const exactMatch = prices.find((p) => p?.currency?.symbol === currencySymbol);
  if (exactMatch) {
    return exactMatch;
  }

  // Fallback: calculate from USD ($) or first available
  const base = prices.find((p) => p?.currency?.symbol === '$') || prices[0];
  if (!base) {
    return {
      currency: currencySymbol === '₦' ? NGN_CURRENCY : { symbol: currencySymbol || '$', label: 'USD' },
      amount: 0
    };
  }

  if (currencySymbol === '₦') {
    return {
      currency: NGN_CURRENCY,
      amount: Math.round(base.amount * NGN_EXCHANGE_RATE)
    };
  }

  return base;
};

export const attachNairaToProduct = (item) => {
  if (!item || !Array.isArray(item.prices)) return item;
  const hasNaira = item.prices.some(
    (p) => p?.currency?.symbol === '₦' || p?.currency?.label === 'NGN'
  );
  if (hasNaira) return item;

  const usdPrice = item.prices.find((p) => p?.currency?.symbol === '$') || item.prices[0];
  const nairaAmount = usdPrice ? Math.round(usdPrice.amount * NGN_EXCHANGE_RATE) : 50000;

  return {
    ...item,
    prices: [
      ...item.prices,
      {
        currency: NGN_CURRENCY,
        amount: nairaAmount
      }
    ]
  };
};
