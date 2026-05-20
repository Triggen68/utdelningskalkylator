const form = document.getElementById('calc');
const result = document.getElementById('result');
const sharesEl = document.getElementById('shares');
const yearlyEl = document.getElementById('yearly');
const monthlyEl = document.getElementById('monthly');
const leftoverEl = document.getElementById('leftover');

function formatNumber(n, decimals = 2) {
  return n.toLocaleString('sv-SE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const price = parseFloat(document.getElementById('price').value);
  const yieldPct = parseFloat(document.getElementById('yield').value);
  const amount = parseFloat(document.getElementById('amount').value);

  if (price <= 0 || amount <= 0) {
    result.hidden = true;
    return;
  }

  const shares = Math.floor(amount / price);
  const yearlyDividend = shares * price * (yieldPct / 100);
  const monthlyDividend = yearlyDividend / 12;
  const leftover = amount - shares * price;

  sharesEl.textContent = formatNumber(shares, 0);
  yearlyEl.textContent = formatNumber(yearlyDividend);
  monthlyEl.textContent = formatNumber(monthlyDividend);
  leftoverEl.textContent = formatNumber(leftover);

  result.hidden = false;
});
