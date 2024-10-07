const admin = require('firebase-admin');

// Load the Firebase service account key
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://greenergoods-default-rtdb.europe-west1.firebasedatabase.app/'
  });
  console.log('Firebase Admin SDK initialized successfully.');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
}

// Function to clear the database
function clearDatabase() {
  const db = admin.database();
  const ref = db.ref('/'); // Adjust the reference path as needed

  ref.remove()
    .then(() => {
      console.log('Database cleared successfully.');
    })
    .catch((error) => {
      console.error('Error clearing database:', error);
    });
}

// Call the function to clear the database
clearDatabase();