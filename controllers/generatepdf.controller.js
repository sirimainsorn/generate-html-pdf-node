var fs = require("fs");
var ejs = require("ejs");
var pdf = require("html-pdf");

const getGeneratePDF = async (req, res) => {
  // var html = fs.readFileSync(__dirname + "/pdf.html", "utf-8");

  var compiled = ejs.compile(fs.readFileSync(__dirname + "/pdf.html", "utf8"));
  var html = compiled({ address1: "bangkok", state1: "TH", invoiceNo: "123445590" });

  //   pdf.create(html, { format: "a4" }).toFile("./download.pdf", function (err, response) {
  //     if (err) return console.log(err);
  //     res.send(response);
  //   });
  pdf.create(html).toBuffer(function (err, buffer) {
    if (err) return console.log(err);
    var pdfBuffer = new Buffer(buffer);
    res.setHeader("Content-disposition", 'inline; filename="test.pdf"');
    res.setHeader("Content-type", "application/pdf");

    // res.render(__dirname + "/pdf.html", { address: "name" });
    res.send(pdfBuffer);
  });
};

module.exports = {
  getGeneratePDF,
};
