import words from '@/data/words.json';

export default function handler(req, res) {
    const category = req.query.category;
    const data = words[category];
    res.status(200).json(data);
  }
  