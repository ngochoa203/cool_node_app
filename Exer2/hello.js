const http = require("http");
const myModule = require("./mymodule");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
        case "/home":
            res.writeHead(200);
            res.end("<h1>This is Home page</h1>");
            break;
        case "/about":
            res.writeHead(200);
            res.end("<h1>This is About page</h1>");
            break;
        case "/calc":
            let result = myModule.calc(10, 5, "+");
            res.writeHead(200);
            res.end(`<h1>Calculation Result: ${result}</h1>`);
            break;
        default:
            res.writeHead(404);
            res.end("<h1>404 Not Found</h1>");
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
