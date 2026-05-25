# CountryPeek

CountryPeek is a React application for searching and exploring country information using the RestCountries API. It includes live search, region filtering, sorting, full country detail pages, dark/light theme switching, and a persistent favourites collection.

## Live Demo

https://YOUR-USERNAME.github.io/country-peek

## Features

- Search countries by name with live results
- Filter by region and sort by name or population
- View country details with languages, currencies, and borders
- Toggle between dark and light themes
- Save countries to a persistent Favourites list

## Tech Stack

- React
- Vite
- React Router DOM
- CSS Custom Properties
- RestCountries API

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open `http://localhost:5173`

## Deployment

This project is configured for GitHub Pages deployment with the correct `base` path and a deploy script.

## Verification

- Resize the browser to 375px and confirm the UI remains readable without horizontal scrolling.
- Tab through the Home page and confirm the search input, filters, and favourite buttons are reachable.
- Search for `Antarctica` and confirm the detail page shows `N/A` for missing values.
- Type only spaces in the search bar and confirm no API request is triggered.
