const xlsx = require("xlsx");
const fs = require("fs");

// Læs Excel-filen (sørg for at opdatere stien til din Excel-fil)
const workbook = xlsx.readFile("/Users/idadavidsen/Desktop/GreenerGoods/database/denStoreKlimadatabase.xlsx");

// Hent listen af ark (sheets) i filen
const sheetNames = workbook.SheetNames;

// Opret en tom objekt til at gemme JSON-data for alle ark
const allSheetsData = {};

// Antag, at ark 2 har indekset 1
const sheetIndex = 1; // Indeks for ark 2
const sheetName = sheetNames[sheetIndex]; // Hent navnet på ark 2
const sheet = workbook.Sheets[sheetName]; // Hent det specifikke ark

// Konverter det specifikke ark til JSON
const jsonData = xlsx.utils.sheet_to_json(sheet);
allSheetsData[sheetName] = jsonData; // Gem dataene under arkets navn

// Gem JSON-dataene i en fil
fs.writeFileSync("output.json", JSON.stringify(allSheetsData, null, 2));

console.log("Excel-filen er blevet konverteret til JSON og gemt som output.json");