export default function handler(req, res) {
    const pdfData = [
      {
        id: 1,
        name: "Annual Report FY(23-24)",
        description: "Annual report for the financial year 2023-24",
        pdfUrl: "/documents/Annual_Report_23-24.pdf"
      },
      {
        id: 2,
        name: "Notice for AGM",
        description: "Notice for the Annual General Meeting",
        pdfUrl: "/documents/Notice_for_AGM.pdf"
      }
    ];
  
    res.status(200).json(pdfData);
  }
  