import { globalProfiles, createProfile } from "../main.js";

export const searchByName = (name) => {
  const profilesContainer = document.getElementById("profilesContainer");
  profilesContainer.innerHTML = "";

  const filteredProfiles = globalProfiles.filter((profile) => {
    const fullName = `${profile.name.first} ${profile.name.last}`.toLowerCase();
    return fullName.includes(name.toLowerCase());
  });

  filteredProfiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};
