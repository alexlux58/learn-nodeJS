const fs = require("fs");

// FILES
// // Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know aboutthe avocado: ${textIn} on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written successfully");

// // Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(err);
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     console.log(err);
//   });
// });
// console.log("File read successfully");

// SERVER
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url);
  const pathName = req.url;

  if (pathName === "/overview") {
    res.end("Hello from the overview");
  } else if (pathName === "/product") {
    res.end("Hello from the product");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });

    res.end("API");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "alex-lux",
    });
    res.end("<h1>404 Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listenning to requests on port 8000");
});
