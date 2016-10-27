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

var initialize = ((url) => {
    console.log("Método initialize del plugin deploy-heroku");

    var tarea_gulp = `\n\ngulp.task("deploy-heroku", ["deploy"], function(){`+
             `\n       require("gitbook-start-heroku-josue-nayra").deploy("${url}");`+
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
    
    exec(`heroku login; heroku create ${json.name}`, respuesta);
});

exports.initialize = initialize;