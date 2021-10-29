import xlsx from 'xlsx';

const excelFile = xlsx.readFile("excelDB.xlsx");

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const dbData = xlsx.utils.sheet_to_json(firstSheet, { defval: "" });

export async function getItemData() { return dbData; }