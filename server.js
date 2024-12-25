import express from "express";
import path from "path";
import { fileURLToPath } from "url";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();



// Middleware para servir arquivos estáticos
app.use(express.static('.'));
app.use(express.static(path.join(__dirname)));



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});






// Rota principal
app.get("/", (req, res) => {
    console.log("Foda isso aí, cara");
});

// Iniciando o servidor
const PORT = 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
