import { LOCAL_BACKEND_API_URL } from "../Utils/env";

// Fetching best seller items at the bottom of Home page
export function FetchBestsellerItems() {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .catch((err: any) => console.log(err));
}

// Fetching categories
export function FetchCategories() {
  return fetch(LOCAL_BACKEND_API_URL)
    .then((response) => response.json())
    .catch((err: any) => console.log(err));
}
