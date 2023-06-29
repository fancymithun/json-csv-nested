const convertJSONtoCSV = require("json-csv-nested");

const jsonObject = {name:"hello",age:"24"}

let result = convertJSONtoCSV(jsonObject);

console.log(result);