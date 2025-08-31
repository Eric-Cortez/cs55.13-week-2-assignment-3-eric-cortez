/*
Week 2 CS55.13

Eric Cortez
Simple web server using node.js http package
*/
const setContentType = require("./utils/setContentType");
const http = require("http");
const fs = require("fs").promises;

const port = 8080;
const host = "127.0.0.1"; // ip address


const requestHandler = (request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        console.log("Serving index.html");
        fs.readFile(__dirname + '/index.html')
            .then(contents => setContentType(response, contents, "text/html; charset=utf-8"));
    } else {
        fs.readFile(__dirname + '/mockData.json')
            .then(contents => setContentType(response, contents, "application/json; charset=utf-8"));
    }
};

const server = http.createServer(requestHandler);


server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/...`);
});