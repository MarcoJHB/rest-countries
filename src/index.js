import "./style.css";

// async function fetchCountriesJSON() {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   return countries;
// }

// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

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
  let html = "";
  countries.forEach((country) => {
    let htmlSegment = `
    <div class="country-card bg-neutral-300 text-neutral-100">
          <img src="${country.flags.svg}" />
          <div class="country-info">
            <h2 class="country-name fw-bold">${country.name.common}</h2>
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

renderCountries();
