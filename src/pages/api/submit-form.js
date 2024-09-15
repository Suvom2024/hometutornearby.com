// pages/api/submit-form.js

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { userType, name, mobileNumber, email, course, subject } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
        project_id: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
        private_key_id: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/gm, '\n'),
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
        auth_uri: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_URI,
        token_uri: process.env.GOOGLE_SERVICE_ACCOUNT_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_CERT_URL,
        client_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_CERT_URL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '1BunoCPt4nQ7RdJHt9AGFmVmLDM5RVU6qqExUpihWrTM'; // Replace with your Google Sheet ID
    let range;
    if (userType === 'Teacher') {
      range = 'Teacher!A:F'; // Adjust to your Teacher sheet name and range
    } else {
      range = 'Student!A:F'; // Adjust to your Student sheet name and range
    }

    const values = [[userType, name, mobileNumber, email, course, subject]];

    const resource = { values };

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource,
    });

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
