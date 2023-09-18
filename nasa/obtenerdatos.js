window.addEventListener('load',obtenerDatos);

function obtenerDatos (){

    const Nasa_key = 'ltYgNAZcg1GB43ZL9q9PtDCNDnPkvGS9AtSxc5lJ';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`;

    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos({date, explanation, media_type, title, url, copyright}){
    
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const multimedia = document.querySelector('#c_multimedia');
    
    if(media_type == 'video'){
        multimedia.innerHTML = `
        <iframe class="embed-responsive-item" src="${url}"></iframe>`
    }else{
        multimedia.innerHTML = `
        <img src="${url}" class="img-fluid" alt="${url}">`
    }

    const copy = document.querySelector('#copy');
    copy.innerHTML = copyright;
}