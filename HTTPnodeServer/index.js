// const http = require('http');
// const fs = require("fs");



// // take response then callback return res.end which is our response
// const server = http.createServer((req, res) => {
//     const JSONdata = fs.readFileSync(`${__dirname}/userApi/userData.json`, 'utf-8')
//     const objData = JSON.parse(JSONdata);
//     if (req.url == '/') {
//         res.write("welocme to home page")
//         res.end()
//     }
//     else if (req.url == '/contact'){
//         res.write("welocme to contact page")
//         res.end();
//     }
//     else if (req.url == '/about'){
//         // fs.readFile(`${__dirname}/userApi/userData.json`, 'utf-8', (err,data) =>{
//             // const objData = JSON.parse(data)
//             res.writeHead(200, {"Content-type": "application/json"})
//             console.log(objData);
//             res.end(objData[0].naam);
//         // });
//     }
//     else {
//         res.writeHead(404, { "Content-type": "text/html" });
//         res.write("page not found");
//         res.end();
//     }
// })

// // without request we cannot give res simple! so here we take a request
// // port , ip , callback and return anthing 
// server.listen(8000, "127.0.0.1", () => {
//     console.log("Lisen http requst")
// })
