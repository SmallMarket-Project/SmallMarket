// npm install xslx 해야함
const xlsx = require("xlsx");

const excelFile = xlsx.readFile("excelDB.xlsx");

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const dbData = xlsx.utils.sheet_to_json(firstSheet, { defval: "" });

console.log(dbData);

