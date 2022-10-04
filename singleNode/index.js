import http, { Server } from "node:http"
import cluster from "node:cluster"
import { cpus } from "os"

const server = http.createServer(
    function(req, res){ // é possivel substituir req por '_'
        res.writeHead(200);
        res.end("<html><strong>HomePage</strong></html>");
    }
);//const server = http.createServer();

const criarFilhos = () =>{
    const processos = cpus().length;
    console.log("iniciado processo pai "+process.pid+" para criad processos filhos");
    for (let i = 0; i < processos; i++) {
        cluster.fork();
    }
}

const iniciarFilho = ()=>{
    console.log("Servidor iniciado com pid "+process.pid+".");
    const PORT = 8000;
    server.listen(
        PORT, 
        function(){
            console.log(`Servidor iniciado em http://localhost:${PORT}`);
        }
    );
}

if(cluster.isPrimary)
    criarFilhos();
else
    iniciarFilho();