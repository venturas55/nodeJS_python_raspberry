const express = require('express');
const router = express.Router();
const path = require('path');
const spawn = require("child_process").spawn;

const helpers = require('../lib/helpers'); //no hay nada aun

router.get('/api/prueba', async (req, res) => {
    //PARA GESTIONAR UNA API
    res.redirect(json);
});
var ruta=path.join(__dirname,'../public/py/cambiarEstado.py');

router.get('/encender/:pin', async (req, res) => {
    const {pin}=req.params;
    console.log("pin: "+pin);
    const programaPython = spawn('python3', [ruta,pin,"off"]);
    programaPython.stdout.on('data', (data) => {
        console.log("stdout: " + data);
    });
     programaPython.stderr.on('data', (data) => {
        console.log("stderr: " + data);
    });
    programaPython.on('close', (code) => {
        console.log("hijo proceso cierra todo");
    });
    //res.send("json encendido");
});
router.get('/apagar/:pin', async (req, res) => {
    const {pin}=req.params;
    console.log("pin: "+pin);
    const programaPython = spawn('python3', [ruta,pin,"on"]);
    programaPython.stdout.on('data', (data) => {
        console.log("algo recibi de python: " + data);
        res.write(data);
    });
       programaPython.stderr.on('data', (data) => {
        console.log("stderr: " + data);
    });
    programaPython.on('close', (code) => {
        console.log("hijo proceso cierra todo");
    });
    //res.send("json encendido");
});


module.exports = router;