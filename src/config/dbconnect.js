import mongoose from "mongoose";
import { string } from "./connectstring.js";

// Usa uma uma string de conexão MongoDB importada atráves de 
// "export const string = " do arquivo connectstring.js no mesmo diretório

mongoose.connect(string); 


let db = mongoose.connection;

export default db;