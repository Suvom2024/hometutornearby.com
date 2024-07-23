import type { NextApiRequest, NextApiResponse } from 'next';
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

// Define the path to the Excel file
const filePath = path.join(process.cwd(), 'public', 'Signin_data.xlsx');

const saveRegistration = (data: any) => {
    try {
        if (!fs.existsSync(filePath)) {
            // Create a new workbook and sheet if the file doesn't exist
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet([data]);
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            XLSX.writeFile(wb, filePath);
            return;
        }

        // Read the existing file
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convert the existing sheet data to JSON
        const existingData = XLSX.utils.sheet_to_json(worksheet);

        // Append the new data
        existingData.push(data);

        // Convert updated data back to worksheet
        const updatedWorksheet = XLSX.utils.json_to_sheet(existingData);
        workbook.Sheets[workbook.SheetNames[0]] = updatedWorksheet;

        // Save the updated file
        XLSX.writeFile(workbook, filePath);
    } catch (error) {
        console.error('Error updating Excel file:', error);
    }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        saveRegistration(req.body);
        res.status(200).json({ message: 'Registration saved' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
