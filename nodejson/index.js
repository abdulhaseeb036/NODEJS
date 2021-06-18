// There are two method of js to obj and json
// obj is {name : "haseeb"}, BUT ,json is {"name" : "haseeb"}
// to convert obj into json use, JSON.tostringify(obj)
// to convert json into obj use, JSON.parse(json);
// const fs = require('fs');



// create obj 
// const objdata = {
//     naam: "haseeb",
//     uni: "iqra uni",
//     status: "pro"
// }

// convert this obj into  json
// const jsonData = JSON.stringify(objdata);
// console.log(jsonData)

// create file and store this json into in.
// fs.writeFile("json.json", jsonData, (err) => {
//     console.log(err);
// })

// read json data from json.txt
// fs.readFile("json.json", (reg, res) =>{
//     const data = res.toString();
//     console.log(data);
//     console.log(reg);
// });

// convert json into obj 
// const convertJSONtoOBJ = JSON.parse(jsonData);
// console.log(convertJSONtoOBJ);
