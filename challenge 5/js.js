const movies = [{
    name: "Avengers: Infinity War",
    trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8",
    poster: "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avengers-3-teaser-poster-1143901.jpg",
    year: "2018"
}, {
    name: "The Incredibles 2",
    trailer: "https://www.youtube.com/embed/ZJDMWVZta3M",
    poster: "https://vignette.wikia.nocookie.net/disney/images/b/b8/Incrediblesheader.jpg",
    year: "2018"
}, {
    name: "Deadpool 2",
    trailer: "https://www.youtube.com/embed/wLeGWcVeIZ4",
    poster: "http://media.comicbook.com/2018/02/deadpool-1080750.jpeg",
    year: "2018"
}, {
    name: "Pacific Rim Uprising",
    trailer: "https://www.youtube.com/embed/mqI29_cZ1NM",
    poster: "https://s3.amazonaws.com/WGHOF/images/398/pacific_rim_uprising_poster__newposter.jpg",
    year: "2018"
}, {
    name: "Solo: A Star Wars Story",
    trailer: "https://www.youtube.com/embed/I7m-7EEI5vo",
    poster: "https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2018/02/1-18.jpg",
    year: "2018"
}]

const changeMovie = (e) => {
    let movie = movies.filter(movie => movie.name == e.target.getAttribute(`data-name`));
    
    document.querySelector(`.video`).setAttribute(`src`, movie[0].trailer);
}

document.querySelector(`.videolist`).addEventListener(`click`, changeMovie);