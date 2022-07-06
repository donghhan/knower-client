// Fetching best seller items at the bottom of Home page
export function FetchBestsellerItems() {
  return fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .catch((err: any) => console.log(err));
}
