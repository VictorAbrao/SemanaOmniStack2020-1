const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:vhla0512@cluster0-d3xt7.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
//get, post, put, delete

//Tipos de parametros: 
//Query Parms: request.query(Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração, remoção)
//Body: request.body (Dadis oara criação ou alteração de um registro)

//MongoDB(Não-Relacional)



server.listen(3333);
