import "./style.css";
import _ from "lodash";
import printMe from "./print.js";
import moon from "./moon.svg";
import sun from "./sun.svg";

function header() {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const mode = document.createElement("div");
  const modeText = document.createElement("p");
  const modeIcon = new Image();

  title.innerText = "Where in the world?";
  modeIcon.src = moon;
  modeText.innerText = "Dark Mode";
  mode.appendChild(modeIcon);
  mode.appendChild(modeText);
  //   const btn = document.createElement("button");

  //   element.innerHTML = _.join(["Hello", "webpack"], " ");

  //   btn.innerHTML = "Click me and check the console!";
  //   btn.onclick = printMe;
  title.classList.add("fs-primary-heading", "fw-bold", "text-neutral-100");
  header.classList.add("bg-neutral-300", "container");
  mode.classList.add("text-neutral-100", "mode-box");
  modeIcon.classList.add("text-neutral-100");

  header.appendChild(title);
  header.appendChild(mode);

  return header;
}

function searchBar() {
  const searchFilter = document.createElement("section");
  const searchContainer = document.createElement("form");
  const searchBar = document.createElement("fieldset");
  const searchInput = document.createElement("input");

  searchInput.placeholder = "Search for a country...";

  const filterContainer = document.createElement("div");
  const dropdownContent = document.createElement("div");
  const region = document.createElement("p");

  filterContainer.innerText = "Filter by region";

  searchContainer.appendChild(searchBar);
  searchBar.appendChild(searchInput);
  searchFilter.appendChild(searchContainer);
  filterContainer.append(dropdownContent, region);
  searchFilter.appendChild(filterContainer);

  searchFilter.classList.add("container", "text-neutral-100");
  searchInput.classList.add("text-neutral-100");
  filterContainer.classList.add("text-neutral-100");

  return searchFilter;
}

document.body.appendChild(header());
document.body.appendChild(searchBar());
