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

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listenning to requests on port 8000");
});
