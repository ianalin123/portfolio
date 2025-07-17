import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'User ID must be a number' });
  }

  if (req.method === 'GET') {
    try {
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}