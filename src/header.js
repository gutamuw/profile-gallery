export const header = document.getElementById("header");
header.innerHTML = `
        <h2>Profiles.io</h2>
        <div>
          <select name="" id="sortSelect">
            <option value="standard" id="standardSort">Standard</option>
            <option value="name" id="sortByName">Name</option>
            <option value="country" id="sortByCountry">Country</option>
          </select>
        </div>
        `;
