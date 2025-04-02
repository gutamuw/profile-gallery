import "./css/style.css";
import "./css/animations.css";
import "./header.js";
import "./footer.js";
import { searchByName } from "./helpers/searchByName.js";

import {
  sortByName,
  sortByCountry,
  standardSort,
} from "./helpers/sortHelpers.js";

let currentPage = 1;
export let globalProfiles = [];
export let unsortedProfiles = [];

const seed = "abc";

export const getData = async (page) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=12&seed=${seed}`
  );
  const profiles = await response.json();
  return profiles;
};

export const createProfile = (profile) => {
  const profileCard = document.createElement("div");
  profileCard.className = "profile-card";
  profileCard.innerHTML = `
        <img src="${profile.picture.large}" alt="${profile.name.first} ${profile.name.last}">
        <h2>${profile.name.first} ${profile.name.last}</h2>
        <a href="mailto:${profile.email}"><i class="fa fa-envelope"></i> ${profile.email}</a>
        <div class="extra-info"><span>${profile.location.country}</span> <span>${profile.gender}</span></div>   
    `;
  return profileCard;
};

export const displayProfiles = async () => {
  const profilesContainer = document.getElementById("profilesContainer");
  const data = await getData(currentPage);
  const profiles = data.results;

  profiles.forEach((profile) => {
    globalProfiles.push(profile);
    unsortedProfiles.push(profile);
    profilesContainer.appendChild(createProfile(profile));
  });

  const loadMoreButton = document.getElementById("loadMoreBtn");
  loadMoreButton.addEventListener("click", loadMore);
};

const loadMore = () => {
  currentPage++;
  displayProfiles();
};

document.getElementById("sortSelect").addEventListener("change", (e) => {
  const selectedTarget = e.target.value;

  if (selectedTarget === "name") {
    sortByName(currentPage);
  } else if (selectedTarget === "country") {
    sortByCountry(currentPage);
  } else if (selectedTarget === "standard") {
    standardSort();
  }
});

document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("search").value;
  searchByName(searchInput);
});

displayProfiles();
