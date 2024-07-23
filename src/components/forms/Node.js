const admin = require('firebase-admin');
const XLSX = require('xlsx');
const fs = require('fs');

// Initialize Firebase
const serviceAccount = require('./serviceAccountKey.json'); // Firebase Admin SDK key file
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-name.firebaseio.com'
});

const db = admin.database();

async function exportToExcel() {
    try {
        const ref = db.ref('users');
        const snapshot = await ref.once('value');
        const data = snapshot.val();

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(Object.values(data));
        XLSX.utils.book_append_sheet(wb, ws, 'Users');

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
        fs.writeFileSync('registration_data.xlsx', excelBuffer);

        console.log('Data exported to Excel successfully');
    } catch (error) {
        console.error('Error exporting data:', error);
    }
}

exportToExcel();
