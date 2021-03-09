const getData = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 404) {
        return Promise.reject("404 Error - Sorry, that page does not seem to exist.")
      } else {
        return Promise.reject(`${response.status} Error - Sorry, something seems to have gone wrong. Please try again later or contact the developer if the problem persists.`)
      }
    });
}

export default getData;