---

# Profile Gallery by Ludde

This is a simple web app that fetches profile data from a backend server, which then retrieves data from the [Random User API](https://randomuser.me/).

## How to Use

### Frontend Setup

This is a Vite-based frontend application. To get started, make sure to install the necessary Node modules by running:

```sh
npm i
```

Then, start the frontend app with:

```sh
npm run dev
```

This will run the frontend on [http://localhost:5173](http://localhost:5173).

### Backend Setup

The backend handles the fetching of the profile data from the Random User API. To set up the backend:

1. Navigate to the **backend** folder.
2. Install the necessary dependencies:

   ```sh
   npm i
   ```

3. Start the backend with:

   ```sh
   npm start
   ```

The backend will be available on [http://localhost:3000](http://localhost:3000).

## About the Application

- 12 profiles (or users) are loaded by default.
- You can load more profiles by clicking the **"Load more"** button.
- Sorting is available by **name** or **country** in ascending order. Use the select element in the top right corner to do this.
- You can search for profiles, but currently, only among the ones that have already been loaded. Use the search input in the header for this.

## About the Files

### Frontend

- Most of the JavaScript logic is in **main.js**, as the app is relatively small.
- Sorting functions can be found in **sortHelpers.js** inside the `helpers` folder.
- The search functionality is handled in **searchByName.js**, also inside the `helpers` folder.
- All styling is located in the `css` folder.
  - General styling is in **style.css**.
  - Animations are in **animations.css**.

### Backend

- The backend is responsible for fetching data from the Random User API.
- The main backend logic is in **index.js**.

Have fun!

---
