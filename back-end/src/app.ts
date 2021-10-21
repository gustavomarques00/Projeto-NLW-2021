import 'dotenv/config'
import express  from "express";
import { router } from './routes'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express();

const serverHttp = http.createServer(app);

app.use(cors())

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
})

io.on("connection",socket => {
    console.log(`Usuário conectado no socket: ${socket.id}`)
})

app.use(express.json())

app.use(router);

app.get("/github", (request,response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback", (request,response) => {
    const {code} = request.query;
})

export { serverHttp, io }; 