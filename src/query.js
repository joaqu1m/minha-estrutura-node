var express = require("express")
var router = express.Router()
var database = require("./conexao")

// lembrando que router.get é select e router.post é insert
router.post("/inserir", function (req, res) {
    // valores do html - coletando da tag body (só funciona em método post)
    var rng = req.body.rng
    var dia = req.body.dia
    var hora = req.body.hora

    // model
    var instrucao = `INSERT INTO numeros (rng, dia, hora) VALUES ('${rng}', '${dia}', '${hora}')`
    console.log("Executando a instrução SQL: \n" + instrucao)
    database.executar(instrucao)

    // controller - esse then se refere à Promise "database.executar(instrucao)"
    .then(
        function (resultado) {
            res.json(resultado)
        }
    ).catch(
        function (erro) {
            console.log(erro)
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            )
            res.status(500).json(erro.sqlMessage)
        }
    )
})

router.get("/selecionar", function (req, res) {
    // model
    var instrucao = `SELECT * FROM numeros`
    console.log("Executando a instrução SQL: \n" + instrucao)
    database.executar(instrucao)

    // controller - esse then se refere à Promise "database.executar(instrucao)"
    .then(
        function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro)
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        }
    )
})

router.get("/selecionar/:valores", function (req, res) {
    // valores recebidos do HTML - vindas direto do endereço da rota
    var valoresRecebidos = req.params.valores
    console.log(valoresRecebidos)

    // model
    var instrucao = `SELECT * FROM numeros`
    console.log("Executando a instrução SQL: \n" + instrucao)
    database.executar(instrucao)

    // controller - esse then se refere à Promise "database.executar(instrucao)"
    .then(
        function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
        function (erro) {
            console.log(erro)
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        }
    )
})

module.exports = router