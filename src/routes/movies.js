const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json'); //Trae el objeto json para manipular los datos

//ruta de prueba
router.get('/',(req,res)=>{
    res.json(movies);
});

//ruta post (Almacenar los datos)
router.post('/',(req,res)=>{


    const { title , director, year, rating } = req.body;
    
    //Se verifica que estan llegando todos los datos
    if (title && director && year && rating) {
        const id = movies.length + 1; //Se agrega un id dependiendo de la longitud del json
        const newMovie = {...req.body, id}; //Se crear un nuevo objeto json 
        movies.push(newMovie); //Se agrega un json a la lista
        res.json(movies)   //Se responde al cliente
    }else {
        res.status(500).json({err: "There was an error"}); //Se responde al cliente si ocurrio un error
    }
});

router.put('/:id',(req,res)=>{
    const { id } = req.params;
    const { title , director, year, rating } = req.body;
    if(title  && director && year && rating){
        _.each(movies,(movie,i)=>{
            if(movie.id == id){
                movie.title = title; 
                movie.director = director; 
                movie.year = year; 
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json(err).json({err: "There was an error"});
    }
});

router.delete('/:id',(req,res) =>{
    const { id } = req.params;

    _.each(movies,(movie,i)=>{
        if (movie.id == id) {
            movies.splice(i,1);
        }
        res.json(movies);
    });
});

module.exports = router;