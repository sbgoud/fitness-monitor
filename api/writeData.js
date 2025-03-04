// api/writeData.js
export default async function handler(req, res) {
    const { username, data } = req.body;
    try {
      // Save data to Vercel Blob
      await saveUserDataToBlob(username, data);
      res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data' });
    }
  }
  
  async function saveUserDataToBlob(username, data) {
    // Implement the logic to save data to Vercel Blob
  }