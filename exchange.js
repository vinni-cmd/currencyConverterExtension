const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const form = document.querySelector("#currencyConversion");
const result = document.querySelector("#result");

const amountNum = parseInt(amount);
const url = new URL('https://api.api-ninjas.com/v1/convertcurrency');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  url.search = new URLSearchParams({
    have: 'CAD',
    want: currency.value,
    amount: amount.value
  })
  fetch(url).then(response => {
    // handle api errors here
    console.log({ response })
    return response.json();
  }).then(data => {
    console.log({ data })
    result.textContent = `${(data.old_amount).toFixed(2)} ${data.old_currency} = ${(data.new_amount).toFixed(2)} ${data.new_currency}`
  }).catch(error => {
    console.log(error);
    result.textContent = "An error occurred, please try again later"
  })
})

