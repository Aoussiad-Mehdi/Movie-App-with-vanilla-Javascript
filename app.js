const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Calling the api.
showMovies(apiUrl);
// Fetching data from the api then looping over each item to create html elements that store our movies.
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        // Creating elements for each movie.
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
        text.innerHTML = element.title;
        image.src = IMGPATH + element.poster_path;
        // Appending childs.
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
    }); 
});
}
// Searching for movies using a search api by calling the showMovies function.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});

