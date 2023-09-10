var fs = require("fs");
var pdf = require("html-pdf");
var html = fs.readFileSync(__dirname + "/pdf.html", "utf-8");

const getGeneratePDF = async (req, res) => {
  //   pdf.create(html, { format: "a4" }).toFile("./download.pdf", function (err, response) {
  //     if (err) return console.log(err);
  //     res.send(response);
  //   });
  pdf.create(html).toBuffer(function (err, buffer) {
    if (err) return console.log(err);

    var pdfBuffer = new Buffer(buffer);
    res.setHeader("Content-disposition", 'inline; filename="test.pdf"');
    res.setHeader("Content-type", "application/pdf");
    res.send(pdfBuffer);
  });
};

module.exports = {
  getGeneratePDF,
};
