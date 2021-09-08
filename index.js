const API="https://api.themoviedb.org/3/movie/550?api_key=8965af3936341e8cedb670a395146a50";
const APII="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8965af3936341e8cedb670a395146a50"
async function getAmovie(){
    const response=await fetch(API);
    const data= await response.json(); 
    console.log(data);
    
return data
}
async function getPopularMovies(){
    const response=await fetch(APII);
    const data= await response.json(); 
    console.log(data.results);
    
return data.results
}
// getAmovie()
// getPopularMovies()

async function getTittle() {
    const title= await getPopularMovies()
    const allTitles=title.map(movie=>movie.original_title)  
    
    return allTitles
}
async function  rederMovie() {
    
    const tittles= await getTittle();
    
    let i=1;
    for(titul of tittles){
        
        addElement(i+++" "+titul)
    }
    
    
}

async function getUrlImage(){
    const images= await getPopularMovies()
    const urlImages=images.map(movie=>movie.poster_path)  
    console.log(urlImages)
    return urlImages
}

async function renderImages(){
    const links= await getUrlImage();
    console.log(links)
    for (link of links){
        addImg (link)
    }
   
}

function addElement (text) {
    // crea un nuevo div
    // y añade contenido
    var newDiv = document.createElement("div");
    newDiv.classList.add("nueva");
    var newContent = document.createTextNode(text);
    newDiv.appendChild(newContent); //añade texto al div creado.
  
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div2");
    currentDiv.appendChild(newDiv)
  }
  function addImg (url) {
    // crea un nuevo div
    // y añade contenido
    

    var img = document.createElement('img');
    img.src ="https://image.tmdb.org/t/p/w500"+url 
    document.getElementById('div3').appendChild(img);
    

    
  }

  rederMovie()
  renderImages()
//   getUrlImage()
//   addImg ("/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg")