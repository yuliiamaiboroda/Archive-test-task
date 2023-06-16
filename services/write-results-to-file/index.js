const fs = require("fs");
const path = require("path");

const resultPath = path.join(__dirname, "../../data/result.json");

function writeResultsToFile(data) {
  fs.writeFile(resultPath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log("Error writing to file", err);
    } else {
      console.log(`Results successfull written`);
    }
  });
}

module.exports = { writeResultsToFile };
