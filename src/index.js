import "./style.css";

const countryArr = [];
const regionFilter = document.querySelector(".region-filter");

function regionOption(regionChoice) {
  return (regionChoice = "All");
}

async function getCountries() {
  let url = "https://restcountries.com/v3.1/all";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderCountries() {
  let countries = await getCountries();
  countries.forEach((country) => {
    let countryObj = {
      flag: country.flags.svg,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
    };
    countryArr.push(countryObj);
  });
  // console.log(countryArr[1].name);
  // console.log(countryArr.map((country) => country.region));
  displayCountries();
}

renderCountries();

function displayCountries() {
  let html = "";
  countryArr.filter(regionOption).forEach((country) => {
    let htmlSegment = `
    <div class="country-card bg-neutral-300 text-neutral-100">
          <img src="${country.flag}" />
          <div class="country-info">
            <h2 class="country-name fw-bold">${country.name}</h2>
            <ul role="list">
              <li><span class="fw-bold">Population: </span>${country.population}</li>
              <li><span class="fw-bold">Region: </span> ${country.region}</li>
              <li><span class="fw-bold">Capital: </span> ${country.capital}</li>
            </ul>
          </div>
        </div>`;
    html += htmlSegment;
  });
  let container = document.querySelector(".country-list");
  container.innerHTML = html;
}
