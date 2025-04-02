export const header = document.getElementById("header");
header.innerHTML = `
        <a href="/"><h2>Profiles.io</h2></a>
        <div>
          <form action="" id="searchForm">
            <input type="search" name="" id="search" />
            <button><i class="fa fa-search"></i></button>
          </form>
          <select name="" id="sortSelect">
            <option value="standard" id="standardSort">Standard</option>
            <option value="name" id="sortByName">Name</option>
            <option value="country" id="sortByCountry">Country</option>
          </select>
        </div>
        `;
