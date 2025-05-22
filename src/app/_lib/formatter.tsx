export function formatIndianCurrency(amount: number) {
    return amount?.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }