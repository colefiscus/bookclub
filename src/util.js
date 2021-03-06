const getData = (url, options) => {
  return fetch(url, options)
    .then(response => response.json());
}

export default getData;