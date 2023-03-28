const amount = document.querySelector("#amount");
const currency = document.querySelector("#amount");
const form = document.querySelector("#currencyConversion");
const result = document.querySelector("#result");

const apiKey = "";
const apiUrl = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const amountVal = amount.value
  const currencyVal = currency.value
  const url = apiUrl + currencyVal

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey
    }
  }).then(response => {
    // handle api errors here
    response.json()
  }).then(data => {
    const rate = data.rate
    const conversionResult = amountVal * rate;
    result.textContent = `${amount} ${currency} = ${conversionResult.toFixed(2)} USD`
  }).catch(error => {
    console.log(error);
    result.textContent = "An error occurred, please try again later"
  })
})

