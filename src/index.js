import "./style.css";

const countryArr = [];

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
    countryArr.push([
      { flag: country.flags.svg },
      { name: country.name.common },
      { population: country.population },
      { region: country.region },
      { capital: country.capital },
    ]);
  });
  displayCountries();
}

renderCountries();

function displayCountries() {
  let html = "";
  for (let i = 0; i < countryArr.length; i++) {
    let htmlSegment = `
          <div class="country-card bg-neutral-300 text-neutral-100">
                <img src="${Object.values(countryArr[i][0])}" />
                <div class="country-info">
                  <h2 class="country-name fw-bold">${Object.values(countryArr[i][1])}</h2>
                  <ul role="list">
                    <li><span class="fw-bold">Population: </span>${Object.values(
                      countryArr[i][2]
                    )}</li>
                    <li><span class="fw-bold">Region: </span> ${Object.values(
                      countryArr[i][3]
                    )}</li>
                    <li><span class="fw-bold">Capital: </span> ${Object.values(
                      countryArr[i][4]
                    )}</li>
                  </ul>
                </div>
              </div>`;
    html += htmlSegment;
  }

  let container = document.querySelector(".country-list");
  container.innerHTML = html;
}
