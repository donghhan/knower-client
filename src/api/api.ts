const LOCAL_BACKEND_API_URL = String(process.env.REACT_APP_LOCAL_BACKEND_API);

// Fetching best seller items at the bottom of Home page
export function FetchBestsellerItems() {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .catch((err: any) => console.log(err));
}

// Fetching categories
export function FetchCategories() {
  return fetch("http://127.0.0.1:8000/products/category", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err: any) => console.log(err));
}
