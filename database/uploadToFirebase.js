const admin = require("firebase-admin");
const fs = require("fs");

// Indlæs Firebase service-konto nøglen
const serviceAccount = require("./serviceAccountKey.json");

// Initialiser Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://greenergoods-default-rtdb.europe-west1.firebasedatabase.app/",
});

// Reference til Realtime Database
const db = admin.database();
const ref = db.ref("products");

// Funktion til at rens nøgler
function sanitizeKeys(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const sanitizedKey = key.replace(/[.#$[\]\/]/g, "_");
    acc[sanitizedKey] = obj[key];
    return acc;
  }, {});
}

// Upload dataene til Realtime Database
async function uploadData() {
  const jsonData = JSON.parse(fs.readFileSync("output.json", "utf8"));
  const sheetName = Object.keys(jsonData)[0];
  const sheetData = jsonData[sheetName];

  for (const item of sheetData) {
    try {
      const sanitizedItem = sanitizeKeys(item);
      await ref.child(sanitizedItem.ID_Ra).set(sanitizedItem);
      console.log(`Data uploaded to Realtime Database:`, sanitizedItem);
    } catch (error) {
      console.error(`Error uploading data:`, error);
    }
  }
  console.log("Upload til Realtime Database er fuldført.");
}

// Kald funktionen for at starte upload
uploadData();