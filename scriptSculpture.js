const sculptureList = require("./data.js"); // import data.js

// const element = sculptureList[0] // <---- comment out this line in your solution!

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

const sculptureListLengths = {};

sculptureList.forEach((sculpture) => {
  const lengths = {};

  for (const key in sculpture) {
    lengths[key] = sculpture[key].length;
  }

  sculptureListLengths[sculpture.name] = lengths;
});
console.log(sculptureListLengths);
