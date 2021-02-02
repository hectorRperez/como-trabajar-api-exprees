const express = require('express');
const morgan = require('morgan');

const app = express();

//setting
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev')); //Morgan es un middlewares que nos permite saber que va llegando al servidor
app.use(express.urlencoded({extended:false})); //permite recibir datos desde formularios HTML
app.use(express.json()); //permite que el servidor reciba y envié json

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

//Starting the server
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
});