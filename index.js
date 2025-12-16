const http = require("http");

const server = http.createServer((request, response) => {
    // response.writeHead(200, "response success", { Header: { "content-type": "text/html" } })
    // response.write("<p> Hello From node server </p>")

    response.writeHead(200, "response success", {
        Header: { "content-type": "application/json" },
    });

    const data = [
        { id: 1, name: "Lamiaa", age: 29 },
        { id: 2, name: "Ahmed", age: 29 },
    ];
    
    response.write(JSON.stringify(data));
    response.end()
});

// Listen
server.listen(8080, () => {
    console.log("server listening ....👻");
});
