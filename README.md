# Profile Gallery by Ludde

This is a simple web app using the [Random User API](https://randomuser.me/).

## How to Use

Don't forget that this is a Vite installation. Make sure to run:

```sh
npm i
```

to install all necessary Node modules before running:

```sh
npm run dev
```

## About the Application

- 12 profiles (or users, if you prefer) are loaded by default.
- You can load more profiles by clicking the **"Load more"** button.
- Sorting is available by **name** or **country** in ascending order. Use the select element in the top right corner to do this.
- You can search for profiles, but currently only among the ones that have already been loaded. Use the search input in the header for this.

## About the Files

- Most of the JavaScript logic is in **main.js**, as the app is relatively small.
- Sorting functions can be found in **sortHelpers.js** inside the `helpers` folder.
- The search functionality is handled in **searchByName.js**, also inside the `helpers` folder.
- All styling is located in the `css` folder.
  - General styling is in **style.css**.
  - Animations are in **animations.css**.

Have fun!
