function setContentType(response, contents, type) {
    response.setHeader("Content-Type", type);
    response.writeHead(200);
    response.end(contents);
}

module.exports = setContentType;
