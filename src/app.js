import express from "express";
import db from "./config/dbconnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco de dados feita com sucesso')
})

const app = express();
app.use(express.json());
routes(app)

export default app