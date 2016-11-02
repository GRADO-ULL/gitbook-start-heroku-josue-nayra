# Práctica 4. Sistemas y Tecnologías Web

## Plugin: gitbook-start-heroku-josue-nayra

El objetivo de esta práctica es extender el package NodeJS desarrollado en la [pŕactica 2](https://github.com/ULL-ESIT-SYTW-1617/creacion-de-paquetes-y-modulos-en-nodejs-josue-nayra), publicado en npm con una nueva funcionalidad que permita que los usuarios con conocimientos de NodeJS puedan extender la conducta del ejecutable para que este realice el despliegue en plataformas distintas de las ya consideradas.

En esta práctica sólo se pide desarrollar el plugin para iaas.ull.es


[Repositorio Paquete](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-josue-nayra)


### Pasos a seguir para la utilización del plugin

1- Descargar el paquete inicial: *gitbook-start*
    
```bash
$ npm install -g gitbook-start-josue-nayra 
```

2- Crear el libro mediante el comando:
    
```bash
$ gitbook-start -d <directorio> --autor <autor> --name <nombre_libro> --url <url_repo>
```
    
    Opciones disponibles para la creación del libro:
        
        -d o --directorio <directorio en el que se desplegará el libro>
        
        --autor <autor del libro>
        
        --name  <nombre del libro>
        
        --url <url del repositorio en github>
    
        --help 
        
        --version

Se construye así la estructura inicial por **gitbook-start**, es decir, la jerarquía de directorios conteniendo los scripts y ficheros markdown para el libro.

3- Colocarse en la carpeta que contiene el libro.

```bash
$ cd <directorio en el que se ha desplegado el libro>
```

4- Instalar las dependencias necesarias mediante el comando:
    
```bash
$ npm install 
```

5- Instalar el plugin requerido como dependendecia con la opción --save, como por ejemplo: **gitbook-start-iaas-ull-es-josue-nayra** para el despliegue en iaas.
    
```bash
$ npm install --save gitbook-start-iaas-ull-es-josue-nayra 
```

6- Es necesario tener el repositorio remoto actualizado. Para ello podemos ejecutar una de las tareas descritas en el gulpfile: **gulp push --mensaje <mensaje commit>**.


7- El usuario debe tener su máquina IAAS configurada. Para ello debe:

* Haber copiado el fichero de clave pública 'id_rsa.pub' de su máquina en el iaas para poder acceder a la misma sin necesidad de especificar usuario y contraseña cuando se realicen conexiones remotas. Para ello podemos ejecutar el siguiente comando
en la máquina local:
    
```bash
$ scp ~/.ssh/id_rsa.pub <máquina remota>:~/.ssh/
```
* En la máquina del IAAS, el usuario debe clonar el repositorio dónde se alojará el gitbook.


8- Ejecutar el plugin:
   
```bash
$ gitbook-start --deploy iaas-ull-es --IP <ip> --path <ruta_maquina> --usuarioremoto <usuario_maquina_iaas>  
```

   Opciones disponibles:
        --deploy <maquina donde se va a desplegar el gitbook>
        --IP <ip de la máquina>
        --usuarioremoto <usuario de la máquina>


NOTA: El despliegue en el IAAS se realizará por defecto en el puerto 8080. En el caso que quiera cambiarse hay que acceder al fichero app.js y modificarlo.



### Tareas Gulp


* **push**

Tarea habilitada para que el usuario pueda actualizar el repositorio que contiene el gitbook. Está disponible una opción --mensaje para especificar el mensaje del commit.

```bash
$ gulp push --mensaje <mensaje del commit>
```

* **instalar_recursos**

Tarea que permite al usuario instalar plugins y dependencias necesarias para su gitbook.

```bash
& gulp instalar_recursos
```

* **deploy**

Tarea deploy genérica que actualiza las gh-pages del gitbook.
```
$ gulp deploy
```

* **deploy --<despliegue realizado>**

Tarea generada posteriormente a la realización y ejecución del comando gitbook-start --deploy, que permite al usuario realizar posteriores despliegues y actualizaciones de su gitbook em la máquina remota con gulp.
Por ejemplo, en el caso de que el usuario despliegue en el IAAS, después de haber desplegado con la opción gitbook-start --deploy iaas-ull-es, en el gulpfile se generará una tarea
con el nombre deploy-iaas-ull-es.

```
$ gulp deploy-<máquina en la se ha desplegado previamente>
```


### Enlaces

- [Campus virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

- [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)

- [Publicación del paquete en npm](https://www.npmjs.com/package/gitbook-start-josue-nayra)

- [Repositorio en Github.com](https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-josue-nayra)

- [Plugin para el despliegue en IAAS](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-josue-nayra)

- [Repositorio del plugin iaas-ull-es](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-josue-nayra) 




### Referencias

- [Tutorial para publicar paquetes nodejs](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/nodejspackages.html)

- [Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/gulp/)

- [Uso de templates](https://www.npmjs.com/package/ejs)

- [Fyle System de Nodejs para el manejo de archivos](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/fs.html)

- [Construyendo package.json](https://docs.npmjs.com/files/package.json)



### Integrantes

- Josué Toledo Castro
    [Github personal](www.github.com/JosueTC94)
- María Nayra Rodríguez Pérez
    [Github personal](www.github.com/alu0100406122)