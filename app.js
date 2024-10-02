// Não se esqueça do "npm install" e "npm start" no console para iniciar o node

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

console.log(`> bibliotecas importadas com sucesso`);

var app = express();

var usuarioRouter = require("./src/query");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/query", usuarioRouter);

console.log(`> rotas definidas`);

app.listen(PORTA, function () {
  console.log(
    `> servidor do seu site já está rodando no endereço http://localhost:${PORTA} em ambiente local`
  );
});
