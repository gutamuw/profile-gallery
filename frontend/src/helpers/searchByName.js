import { globalProfiles, createProfile } from "../main.js";
import { clearProfilesContainer } from "./sortHelpers.js";

export const searchByName = (name) => {
  clearProfilesContainer();

  const filteredProfiles = globalProfiles.filter((profile) => {
    const fullName = `${profile.name.first} ${profile.name.last}`.toLowerCase();
    return fullName.includes(name.toLowerCase());
  });

  filteredProfiles.forEach((profile) => {
    profilesContainer.appendChild(createProfile(profile));
  });
};
