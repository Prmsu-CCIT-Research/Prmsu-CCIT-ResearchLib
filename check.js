var fs = require('fs');
var directoriesDegree ="BS CpE"; 
var directoriesYear ="2020"; 
const path = require("path");
function findFiles(){
  const result = fs.readdirSync(`./CCIT Thesis Combined/${directoriesDegree}/${directoriesYear}`);
  const empty = [];
  for(let i = 0; i < result.length; i++){
    empty.push(result[i]);
  }
  console.log(empty);
  console.log(empty.length);
}
findFiles();