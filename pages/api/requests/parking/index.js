import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'pages/api/requests/parking/parking.json');

    if (req.method === 'POST') {
        const parkingIssues = req.body;
        
        let parking_issues = []; 
        try {
            const fileData = fs.readFileSync(filePath, 'utf8');
            parking_issues = JSON.parse(fileData).parkingissue;
        } catch (error) {
            console.error('Error reading file:', error);
        }
    
        parking_issues.push(parkingIssues.issueText);
    
        try {
            fs.writeFileSync(filePath, JSON.stringify({ parkingissue: parking_issues }, null, 2));
            res.status(200).json({ success: true, message: 'Message added successfully' });
        } catch (error) {
            console.error('Error writing file:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}