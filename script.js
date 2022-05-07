function OcultarPeli(){
    document.getElementById("PeliculasCont").style.display = 'none';
}
function OcultarAnime(){
    document.getElementById("AnimeCont").style.display = 'none';
}
function OcultarManga(){
    document.getElementById("MangaCont").style.display = 'none';
}
function OcultarMusica(){
    document.getElementById("MusicaCont").style.display = 'none';
}

var array = new Array;
var bool = true;
var i=0;
var body = document.getElementById("body");
function MostrarPeli(){
    let peli= document.getElementById("PeliculasCont");
    /*if(array.length==0){
        peli.style.display = 'block';
        array.push('pelicula');
    }
    else if(array.length>0){
        for(let i=0;i<array.length;i++){
            if(array[i]=='pelicula'){
                array.splice(i);
                OcultarPeli();
                break;
            }
            else{
                peli.style.display = 'block';  
                array.push('pelicula');
                break;
            }
        }
    }*/
    if(array.length==0){
        peli.style.display = 'block';
        array.push('peli');
        document.getElementById("peli").style.background = "#ef8354";
    }
    else{
        while(i<array.length){
            if(array[i]=='peli'){

                array.splice(i,1);
                OcultarPeli();
                bool=false;
                document.getElementById("peli").style.background = "#092327";
                break;
            }
            else{
                i++;
            }
        }
        if(bool){
            peli.style.display = 'block';
            array.push('peli');
            document.getElementById("peli").style.background= "#ef8354";
        }
        
    }
    i=0;
    bool=true;
    console.log(array);
}

function MostrarAnime(){
    let anime = document.getElementById("AnimeCont");
    /*if(array.length==0){
        anime.style.display = 'block';
        array.push('anime');
    }
    else if(array.length>0){
        for(let i=0;i<array.length;i++){
            if(array[i]=='anime'){
                array.splice(i);
                OcultarAnime();
                break;
            }
            else{
                anime.style.display = 'block';  
                array.push('anime');
                break;
            }
        }
    }
    */

    if(array.length==0){
        anime.style.display = 'block';
        array.push('anime');
        let an = document.getElementById("anim");
        an.style.background = "#ef8354";
    }
    else{
        while(i<array.length){
            if(array[i]=='anime'){
                array.splice(i,1);
                OcultarAnime();
                bool=false;
                document.getElementById("anim").style.background = "#092327";
                break;
            }
            else{
                i++;
            }
        }
        if(bool){
            anime.style.display = 'block';
            array.push('anime');
            document.getElementById("anim").style.background= "#ef8354";
        }
        
    }
    i=0;
    bool=true;
    console.log(array);
}

function MostrarManga(){
    let manga = document.getElementById("MangaCont");
    if(array.length==0){
        manga.style.display = 'block';
        array.push('manga');
        document.getElementById("mang").style.background= "#ef8354";
    }
    else{
        while(i<array.length){
            if(array[i]=='manga'){

                array.splice(i,1);
                OcultarManga();
                document.getElementById("mang").style.background= "#092327";
                bool=false;
                break;
            }
            else{
                i++;
            }
        }
        if(bool){
            manga.style.display = 'block';
            array.push('manga');
            document.getElementById("mang").style.background= "#ef8354";
        }
    }
    i=0;
    bool=true;
    console.log(array);
}

function MostrarMusica(){
    let musica = document.getElementById("MusicaCont");
    if(array.length==0){
        musica.style.display = 'block';
        array.push('musica');
        document.getElementById("musi").style.background= "#ef8354";
    }
    else{
        while(i<array.length){
            if(array[i]=='musica'){
                array.splice(i,1);
                OcultarMusica();
                bool=false;
                document.getElementById("musi").style.background= "#092327";
                break;
            }
            else{
                i++;
            }
        }
        if(bool){
            musica.style.display = 'block';
            array.push('musica');
            document.getElementById("musi").style.background= "#ef8354";
        }
        
    }
    i=0;
    bool=true;
    console.log(Array);
}

function CambiarFondo1(){
    body.style.backgroundImage = "linear-gradient(to right,blue,black)";
}

function CambiarFondo2(){
    body.style.backgroundImage = "linear-gradient(to right,purple,green)";
}

function CambiarFondo3(){
    body.style.backgroundImage = "linear-gradient(to right,red,yellow)";
}

function CambiarFondo4(){
    body.style.backgroundImage = "linear-gradient(to right,purple,orange)";
}