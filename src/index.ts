import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from './routes/users.route';

const app = express();

/** CONFIGURAÇÃO DA APLICAÇÃO  */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** CONFIGURAÇÃO DE ROTAS */
app.use(usersRoute);
app.use(statusRoute);

/** INICIALIZAÇÃO DO SERVIDOR */
app.listen(3000, () => {
   console.log('SERVER na porta 3000');
});

