const form = document.getElementById('calc');
const result = document.getElementById('result');
const sharesEl = document.getElementById('shares');
const yearlyEl = document.getElementById('yearly');
const yearlyNetEl = document.getElementById('yearlyNet');
const monthlyEl = document.getElementById('monthly');
const leftoverEl = document.getElementById('leftover');

const TAX_RATE = 0.30;

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
  const yearlyNet = yearlyDividend * (1 - TAX_RATE);
  const monthlyNet = yearlyNet / 12;
  const leftover = amount - shares * price;

  sharesEl.textContent = formatNumber(shares, 0);
  yearlyEl.textContent = formatNumber(yearlyDividend);
  yearlyNetEl.textContent = formatNumber(yearlyNet);
  monthlyEl.textContent = formatNumber(monthlyNet);
  leftoverEl.textContent = formatNumber(leftover);

  result.hidden = false;
});
