let senhaAtual = 0;
let historico = [];

function formatarSenha(n) {
  return "A" + n.toString().padStart(3, '0');
}

module.exports = {
  getSenhaAtual: () => formatarSenha(senhaAtual),
  chamarProxima: (guiche) => {
    senhaAtual++;
    const registro = {
      senha: formatarSenha(senhaAtual),
      guiche,
      hora: new Date().toLocaleTimeString()
    };
    historico.unshift(registro);
    if (historico.length > 10) historico.pop();
    return registro;
  },
  getHistorico: () => historico
};
