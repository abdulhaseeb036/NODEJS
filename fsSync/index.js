// // import node module
// const fs = require("fs");

// // createfile and write data onto it.
// fs.writeFileSync("read.txt", "hello how are you");

// // if file alredy exits so only override data;
// fs.writeFileSync("read.txt", " again how are you");

// // if we dont wont to override so we append means prevdata + newdata;
// fs.appendFileSync("read.txt", " Hey I am again with appending");

// // buf is new data type in nodejs which means they store data in binary;
// const buf_data =  fs.readFileSync("read.txt");
// console.log(buf_data);

// // Convert binary data into string;
// const data1 = buf_data.toString();
// console.log(data1);

// Change Sync file name 
// fs.renameSync("read.txt", "readwrite.txt");

// create a sync folder
// fs.mkdirSync("nodejs");

// create and write file which is in our nodejs folder
// fs.writeFileSync("nodejs/bio.txt", "hey this is bio");

// Append data into prevois data
// fs.appendFileSync("nodejs/bio.txt"," And I will write Some data on to it");

// get data from bio.txt without in buffer
// const data2 = fs.readFileSync("nodejs/bio.txt", "UTF-8");
// console.log(data2);

// change file name bio.txt;
// fs.renameSync("nodejs/bio.txt", "nodejs/biodata.txt");

// Delete floder and file
// fs.rmdirSync("nodejs");
// fs.unlink(path here ....);

