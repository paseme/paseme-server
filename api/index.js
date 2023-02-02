const { MongoClient } = require("mongodb");

module.exports = async function(req, res) {

    const client = new MongoClient(process.env.MONGODB_URI);

    client.connect()

        .then(function() {
            
            console.log("CONECTADO COM O BANCO DE DADOS!");

            //return res.status(200).json({ mensagem: "CONECTADO COM O BANCO DE DADOS!" });

        })

        .catch(function(erro) {

            console.error(erro);

            //return res.status(500).json({ mensagem: "ERRO AO CONECTAR COM O BANCO DE DADOS!" });

        });

    client.db("paseme").collection("atendimento").insertOne({ codigo: "oi" })

        .then(function(result) {

            return res.status(200).json({ mensagem: "DOCUMENTO SALVO!" });

        })

        .catch(function(erro) {

            console.error(erro);

            return res.status(500).json({ mensagem: "ERRO AO SALVAR DOCUMENTO!" });

        });

    client.close();
}