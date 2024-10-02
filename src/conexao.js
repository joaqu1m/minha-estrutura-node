var mysql = require("mysql2");

var mySqlConfig = {
  host: "localhost",
  database: "testes",
  user: "root",
  password: "database_password",
};

function executar(instrucao) {
  var conexao = mysql.createConnection(mySqlConfig);
  conexao.connect();
  return new Promise((resolve, reject) => {
    conexao.query(instrucao, (erro, resultados) => {
      conexao.end();
      if (erro) {
        reject(erro);
      }
      console.log(resultados);
      resolve(resultados);
    });
    conexao.on("error", function (erro) {
      return "ERRO NO MySQL WORKBENCH: ", erro.sqlMessage;
    });
  });
}

module.exports = {
  executar,
};
