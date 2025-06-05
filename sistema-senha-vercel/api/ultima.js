const db = require('./_db');

export default function handler(req, res) {
  res.status(200).json({ senha: db.getSenhaAtual() });
}
