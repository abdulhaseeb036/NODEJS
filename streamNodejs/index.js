const fs =require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req,res) =>{

    // 1st method and lengthy ocantionally use 
//     const rstream = fs.createReadStream("stream.txt");
//     rstream.on("data", (chunkdata) =>{
//         res.write(chunkdata);
//     })
//     rstream.on('end', () => {
//         res.end()
//     })
//     rstream.on('error', (err) => {
//       console.log(err);
//       res.end("file not found");
//     })

    // 2st method and easy and short often use 
    // const rstream = fs.createReadStream("stream.txt");
    // rstream.pipe(res);
});

server.listen(5000, "127.0.0.1");