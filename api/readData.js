// api/readData.js
export default async function handler(req, res) {
    const { username } = req.query;
    // Implement logic to read data from Vercel Blob
    res.status(200).json({ data: 'user data' });
  }