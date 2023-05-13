const items = {
    "apple": 2.99,
    "banana": 1.99,
    "orange": 3.49,
    "mango": 4.99,
    "watermelon": 6.99
  };
  
  const exchangeRate = 80;
  
  const convertedPrices = Object.keys(items).map((key) => {
    const priceInRupees = items[key] * exchangeRate;
    return {[key]: priceInRupees};
  });
  
  console.log(convertedPrices);
  