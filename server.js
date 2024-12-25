import express from "express";

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static('./public'));

// Rota principal
app.get("/", (req, res) => {
    console.log("Foda isso aí, cara");
    res.send("Servidor está funcionando!");
});

// Iniciando o servidor
const PORT = 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
