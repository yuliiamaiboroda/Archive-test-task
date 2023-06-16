const { fetchData } = require("../../services/fetching-data");
const cheerio = require("cheerio");

async function getTotalPages(url) {
  const html = await fetchData(url);
  const $ = cheerio.load(html);

  const resultText = $("p.woocommerce-result-count").text();
  const matches = resultText.match(/of (\d+)/);
  if (matches) {
    const totalResults = parseInt(matches[1]);
    const itemsPerPage = 16;
    const totalPages = Math.ceil(totalResults / itemsPerPage);

    return totalPages;
  }

  return 0;
}

module.exports = { getTotalPages };
