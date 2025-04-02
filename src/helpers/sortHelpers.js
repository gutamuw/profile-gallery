import { createProfile, globalProfiles, unsortedProfiles } from "../main.js";

export const sortByName = () => {
  globalProfiles.sort((a, b) => {
    const nameA = a.name.first.toLowerCase();
    const nameB = b.name.first.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  });

  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  globalProfiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};

export const sortByCountry = () => {
  globalProfiles.sort((a, b) => {
    const countryA = a.location.country.toLowerCase();
    const countryB = b.location.country.toLowerCase();

    if (countryA < countryB) return -1;
    if (countryA > countryB) return 1;

    return 0;
  });

  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  globalProfiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};

export const standardSort = () => {
  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  unsortedProfiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};
