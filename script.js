const RATES = {
  MXN: 1,
  USD: 18.7,
  EUR: 20.3,
  GBP: 23.6,
  CAD: 13.5,
  JPY: 0.125,
};

const amountFrom = document.getElementById('amountFrom');
const amountTo = document.getElementById('amountTo');
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const fxRate = document.getElementById('fxRate');

function calculate() {
  const from = currencyFrom.value;
  const to = currencyTo.value;
  const value = parseFloat(amountFrom.value) || 0;

  const valueInMXN = value * RATES[from];
  const result = valueInMXN / RATES[to];
  const rate = RATES[from] / RATES[to];

  amountTo.value = result.toLocaleString('es-MX', { maximumFractionDigits: 2 });
  fxRate.textContent = `1 ${from} = ${rate.toLocaleString('es-MX', { maximumFractionDigits: 4 })} ${to}`;
}

[amountFrom, currencyFrom, currencyTo].forEach((el) => el.addEventListener('input', calculate));
calculate();

const navBurger = document.getElementById('navBurger');
const navLinks = document.querySelector('.nav-links');
if (navBurger) {
  navBurger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}
