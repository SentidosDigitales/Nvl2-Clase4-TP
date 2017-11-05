/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Pelicula = function(){
    var _ID;
    var _titulo;
    var _descripcion;
    var _año;
    var _duracion;
    var _actores;
    var _director;
    var setTitulo = function(titulo){
        this._titulo = titulo;
    };
    var setDescripcion = function(descripcion){
        this._descripcion = descripcion;
    };
    var setAño = function(año){
        this._año = año;
    };
    var setDuracion = function(duracion){
        this._duracion = duracion;
    };
    var addActor = function(actor){
        if(this._actores==null){
            this._actores = new Array();
        }
        this._actores.push(actor);
    };
    var setDirector = function(director){
        this._director = director;
    };
    return{
        setTitulo,
        setDescripcion,
        setDirector,
        setDuracion,
        addActor
    };
    
};

peli1 = new Pelicula();
peli1.setTitulo("American Flyers");
peli1.setDirector("Jones Jaula");
peli1.setDuracion(101);
peli1.setDescripcion("Unos locos que andan en bici");
peli1.addActor("Kevin Bacon");
peli1.addActor("Kevin Cotsner");