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

async function getElementsMovie() {
    const title= await getPopularMovies()
    let id=1;
    const allmovies=title.map(movie=>(
        {
            id: id++,
          title: movie.original_title,
          imgageLink: movie.poster_path
        } 
      ));    
    
    return allmovies
}
async function  rederMovie() {
    
    const tittles= await getElementsMovie();
    
    let i=1;
    for(titul of tittles){
        
        addElement(titul)
    }
    
    
}

async function getUrlImage(){
    const images= await getPopularMovies()
    const urlImages=images.map(movie=>movie.poster_path)  
    console.log(urlImages)
    return urlImages
}

// async function renderImages(){
//     const links= await getUrlImage();
//     console.log(links)
//     for (link of links){
//         addImg (link)
//     }
   
// }

function addElement (movieElemets) {
    // crea un nuevo div
    // y añade contenido
    var newDiv = document.createElement("div");
    newDiv.classList.add("container");
    var currentDiv = document.getElementById("div2");
    currentDiv.appendChild(newDiv)
    var divTittle = document.createElement("div");
    divTittle.classList.add("movie-tittle");
    divTittle.innerHTML=movieElemets.id+" "+movieElemets.title;
    var divImg = document.createElement("div");
    divImg.classList.add("movie-image");

    
    newDiv.appendChild(divTittle);
    // añade el elemento creado y su contenido al DOM
    
   
    var img1 = document.createElement('img');
    img1.src ="https://image.tmdb.org/t/p/w500"+ movieElemets.imgageLink;
    divImg.appendChild(img1);
    newDiv.appendChild(divImg);
  }
//   function addImg (url) {
//     // crea un nuevo div
//     // y añade contenido
//     var divImg = document.createElement("div");
//     divImg.classList.add("movie-image");

//     var img = document.createElement('img');
//     img.src ="https://image.tmdb.org/t/p/w500"+url 
//     divImg.appendChild(img)
//     document.getElementById('div2').appendChild(divImg);
    

    
//   }

  rederMovie()
// renderImages()
//   getUrlImage()
//   addImg ("/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg")