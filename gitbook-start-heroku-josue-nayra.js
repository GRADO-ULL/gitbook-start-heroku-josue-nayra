"use strict"

const basePath = process.cwd();
const fs = require('fs-extra');
const path = require('path');
var exec = require('child_process').exec;
const json = require(path.join(basePath, 'package.json'));

var respuesta = ((error, stdout, stderr) =>
{
    if (error)
        console.error("Error:"+error);
    console.log("Stderr:"+stderr);
    console.log("Stdout:"+stdout);
});

var deploy = (() => {
    console.log("Método del plugin deploy-heroku");
});

var initialize = (() => {
    console.log("Método initialize del plugin deploy-heroku");

    var tarea_gulp = `\n\ngulp.task("deploy-heroku", ["deploy"], function(){`+
             `\n       require("gitbook-start-heroku-josue-nayra").deploy();`+
             `\n});`;

    fs.readFile('gulpfile.js', "utf8", function(err, data) {
        if (err) throw err;
        // console.log(data);
        if(data.search("deploy-heroku") != -1)
        {
          console.log("Ya existe una tarea de deploy-heroku");
        }
        else
        {
          // console.log("No existe una tarea de deploy-iaas-ull-es");
          fs.appendFile(path.join(basePath,'gulpfile.js'), `${tarea_gulp}`, (err) => {
            if (err) throw err;
              console.log("Escribiendo tarea en gulpfile para próximos despliegues");
          });
        }
    });
    
    fs.copy(path.join(__dirname,'template','app.js'), path.join(basePath, 'app.js'));
    fs.copy(path.join(__dirname,'template','Procfile'), path.join(basePath, 'Procfile'));

});

exports.initialize = initialize;
exports.deploy = deploy;