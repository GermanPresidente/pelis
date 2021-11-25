const  express  =  require ( 'express' ) ;
const  app =  express ( ) ;
const  port =  3000 ;
const  coll_movies  =  [
    {

    codigo : 01 ,
    nombre : "Venom: Carnage liberado", 
    año : 2021, 
    genero : ["Accion, Ciencia ficcion", "Aventura"], 
    director : "Andy Serkis", 
    espectadores : 8000.000,

    },
    {

    codigo : 02 , 
    nombre : "duro de matar 99", 
    año : 2051, 
    genreo : ["accion"], 
    director : "guillermo del toro", 
  espectadores : "2000.000",

    },
    {

    codigo : 03, 
    nombre : "spiderman 3", 
    año : 2021, 
    genero : ["Comedia","accion"], 
    director : "Jon Watts", 
    espectadores : 7900.000,

    },
    {
      codigo:04,
      nombre: "rapidos 11",
      año:2025,
      genero: ["accion"],
      director:"Dennis Dugan"
      espectadores: 4000.000
  
    },
    {

    codigo : 05, 
    nombre : "una loca pelicula epica", 
    año : 2020, 
    genero : ["comedia","romance"], 
    director : "Jason Friedberg", 
    espectadores : 1000.000,

    },
    {

    codigo : 06, 
    nombre : "numero 23", 
    año : 2021, 
    genero : [ "Suspenso", "ciencia ficcion"], 
    espectadores : 7800.000,

    },
    {
      codigo : 07, 
      nombre : "Shamg-Chi y la leyenda de los Diez anillos", 
      año : 2021, 
      genero : ["Accion", "Fantacia"], 
      director : "Destin Daniel Cretton", 
      espectadores : 2240.000,


  
    },
    {

    codigo : 08, 
    nombre : "Aves de presa", 
    año : 2020, 
    genero : ["Accion", "Pelicula de superheroes"], 
    director : "Cathy Yan", 
    espectadores : 2020.000,

    },
    {

    nombre: "Rocky",
    codigo:10,
    estreno:"13 de enero de 1977",
    genero:"deportes",
    director:"John G. Avildsen",
    espectadores:1000.000
    },
    {

    codigo : 10, 
    nombre : "John Wick 3: Parabellum", 
    año : 2019, 
    genero : ["Accion", "Suspenso"],
    director : "Chad Stahelski", 
    espectadores: 980.000

    }
    ]
aplicación . get ( '/' , function ( req , res )  {
    res . enviar ( arr_movies ) ;    
} )

aplicación . get ( '/ movies /: code' , function ( req , res )  {
    let  i  =  req . params . codigo ;
    res . enviar ( col_movies . buscar ( e => e . codigo == i ) ) ;
} )

aplicación . get ( '/ películas' , function ( req , res ) {
    res . enviar ( col_movies . sort ( function ( a , b ) {
        return  b . audiencia - a . audiencia ;
    } ) ) ;
} )

aplicación . escuchar ( puerto ,  function ( ) {
    console.log( `Su servidor está funcionando correctamente en http: // localhost: $ { port } ` )
} )
