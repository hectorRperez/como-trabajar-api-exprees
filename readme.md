## TODOS LOS PASOS PARA CREAR UN API DE PRUEBA CON NODE Y EXPRESS

___
### Paquetes instalados

~~~
    $ npm i express morgan
    $ npm i nodemon -D 
    
    //underscore me ayuda a manipular más un objeto
    $ npm i underscore  
~~~

Configurar nodemon en nuestro servidor

~~~
{
  "name": "api-node-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

~~~

___
# 1) Crear el servidor 

![Texto alternativo](/codigo_ejemplo/code-snapshot_1.png)

# 2) Configuracion del servidor 
### *src/index.js*

![Texto alternativo](/codigo_ejemplo/code-snapshot_2.png)

# 2) Configuracion de las rutas se agrega POST
### *src/routes/mvoies.js*

![Texto alternativo](/codigo_ejemplo/code-snapshot_3.png)

# 3) Configuracion de las rutas se agrega PUT, DELETE
### *src/routes/mvoies.js*

![Texto alternativo](/codigo_ejemplo/code-snapshot_4.png)