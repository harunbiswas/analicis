// Dependenciss

const http = require('http');
const {handleReqRes} = require('./helpers/handelReqRes');

// app Object - module scaffolding
const app = {};

// configaration 
app.config = {
    port: 3000,
};

// handle request & response
app.handleReqRes = handleReqRes;


// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`)
    });
}





// start the server

app.createServer();

