const countriesURL = "https://restcountries.com/v3.1/all";

let countriesArr = [];

const fetchCountries = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((countries) => {
      countries.forEach((country) => countriesArr.push(country));
      renderCountryList(countriesArr);
    });
};

let regionList = { Africa: [], Asia: [] };


