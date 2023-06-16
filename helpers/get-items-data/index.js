const cheerio = require("cheerio");

let id = 1;

function getItemsData(html) {
  const $ = cheerio.load(html);
  const items = [];

  $("li.product").each((index, element) => {
    const name = $(element).find("h2").text();
    const image_url = $(element).find("img").attr("src");
    const price = $(element).find("span.woocommerce-Price-amount").text();
    const sku = $(element)
      .find("a.button.product_type_simple.add_to_cart_button")
      .attr("data-product_sku");

    const item = {
      name: name,
      image_url: image_url,
      price: price,
      sku: sku,
      id: id++,
    };
    items.push(item);
  });

  return items;
}

module.exports = {
  getItemsData,
};
