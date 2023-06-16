const { getItemsData } = require("./helpers/get-items-data");
const { getTotalPages } = require("./helpers/get-total-pages");
const { fetchData } = require("./services/fetching-data");
const { writeResultsToFile } = require("./services/write-results-to-file");

const url = "https://scrapeme.live/shop/";

const items = [];

const fetchAllPages = async () => {
  const totalPages = await getTotalPages(url);

  for (let page = 1; page <= totalPages; page++) {
    const urlData = `${url}page/${page}/`;

    const pageHtml = await fetchData(urlData);
    const pageItems = getItemsData(pageHtml);
    items.push(...pageItems);

    const uniqueItems = [...new Set(items)];
    writeResultsToFile(uniqueItems);

    console.log(`Processed page ${page}`);
  }

  console.log("All pages processed");
};

fetchAllPages();
