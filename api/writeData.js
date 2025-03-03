// api/writeData.js
export default async function handler(req, res) {
    const { username, data } = req.body;
    // Implement logic to write data to Vercel Blob
    res.status(200).json({ message: 'Data saved' });
  }