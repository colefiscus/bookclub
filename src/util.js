const getData = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        return `${response.status} error. Sorry! Something went wrong! Please try again later or reach the developer through the GitHub link in the footer if the problem persists.`;
      } else {
        return response.json();
      }
    })
}

export default getData;