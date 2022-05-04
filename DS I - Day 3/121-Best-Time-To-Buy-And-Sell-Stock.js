/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minBuyPrice = Infinity;
    let profit = 0;
    
    // iterate through prices
    for(let price of prices) {
        // potential unprofitable to sell, update minBuyPrice
        if(price < minBuyPrice) {
            minBuyPrice = price;
            // potential profitable to sell
        } else if (price - minBuyPrice > profit) {
            // calculate profit
            profit = price - minBuyPrice;
        }
    }
    return profit;
};