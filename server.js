const http = require("http");

const server = http.createServer((req, res) => {
    // res.writeHead(200, "response success ", { Headers: { "content-type": "text/html" } })
    // res.write("<p> Hello From server </p>")
    res.writeHead(200, { Headers: { "content-type": "application/json" } });
    const data = [
        { name: "Lamia", age: 29, isWork: true },
        { name: "Selim", age: 30, isWork: true },
    ];
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000, () => {
    console.log("first log from node js server.....");
});
