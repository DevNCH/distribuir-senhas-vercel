const db = require('./_db');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { guiche } = req.body;
    const registro = db.chamarProxima(guiche || "Desconhecido");
    res.status(200).json(registro);
  } else {
    res.status(405).end(); // Método não permitido
  }
}
