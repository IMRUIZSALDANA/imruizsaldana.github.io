console.log("all good");
// MENÃš LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

// OCULTA EL MENÃš DESPUES DE ELEJIR LA OPCION 
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// CREA LAS BARRITAS DE UNA BARRA PARTICULAR IDENTIFICADA POR SU ID
function crearBarra(id_barra){
    for(i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// SELECIONA TODAS LAS BARRAS  GENERALES PARA LUEGO MANIPULALAS 
let html = document.getElementById("html");
crearBarra(html);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let php = document.getElementById("php");
crearBarra(php);

let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);


let contador = [-1,-1,-1,-1,-1,];
let entro = false;
 
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro == false){
        entro = true;
        
        const intervalhtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalhtml);
        },100)
        const intervaljavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervaljavascript);
        },100)
        const intervalphotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 3, intervalphotoshop);
        },100)
        const intervalphp = setInterval(function(){
            pintarBarra(php, 11, 4, intervalphp);
        },100)
        const intervalilustrator = setInterval(function(){
            pintarBarra(ilustrator, 10, 2, intervalilustrator);
        },100)
    }
}

// LLENO UNA BARRA CON LA CANTIDAD INDICADA
function pintarBarra(id_barra, cantidad, indice, interval){
    contador[indice]++;
    x = contador[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#0986a5"
    }else{

        clearInterval(interval)

    }
}

window.onscroll = function(){
    efectoHabilidades();
}