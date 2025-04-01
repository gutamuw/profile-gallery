import { getData } from "../main.js";
import { createProfile } from "../main.js";

export const sortByName = async (currentPage) => {
  const data = await getData(currentPage);
  let profiles = data.results;

  profiles.sort((a, b) => {
    const nameA = a.name.first.toLowerCase();
    const nameB = b.name.first.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    console.log("hi");
    return 0;
  });

  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  profiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};

export const sortByCountry = async (currentPage) => {
  const data = await getData(currentPage);
  let profiles = data.results;

  profiles.sort((a, b) => {
    const countryA = a.location.country.toLowerCase();
    const countryB = b.location.country.toLowerCase();

    if (countryA < countryB) return -1;
    if (countryA > countryB) return 1;
    return 0;
  });

  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  profiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};

export const standardSort = async () => {
  const data = await getData(1);
  let profiles = data.results;

  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  profiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};
