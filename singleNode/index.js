import http, { Server } from "node:http"

const server = http.createServer(
    function(req, res){ // é possivel substituir req por '_'
        res.writeHead(200);
        res.end("<html><strong>HomePage</strong></html>");
    }
);//const server = http.createServer();

const PORT = 8000;
server.listen(
    PORT, 
    function(){
        console.log(`Servidor iniciado em http://localhost:${PORT}`);
    }
);