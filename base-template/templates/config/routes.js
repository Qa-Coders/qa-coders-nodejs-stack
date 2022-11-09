const express = require('express')
const routesRegistry = require("./routes-registry.json");


module.exports = function (server) {
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    server.use('/status', (req, res) =>
        res.send(`BACKEND is runner.`)
    );


    Object.keys(routesRegistry)
    .forEach(path=>{
        const apiService = require(routesRegistry[path]);
        apiService.register(protectedApi, path);
    });

    server.use(express.static(require('path').join(__dirname, '../public')));
}