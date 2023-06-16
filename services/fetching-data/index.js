const axios = require("axios");

async function fetchData(url) {
  const response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log("Error occurred while fetching data");
    return;
  }

  return response.data;
}

module.exports = { fetchData };
