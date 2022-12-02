import {fetchMovieAvailability,fetchMovieList} from "./api.js"

// function displayMovies() {
//     console.log("movies")
// }

// displayMovies()

//create a loader
let loader = document.createElement('div')
loader.id = "loader"
loader.className = "loader"
loader.innerText = "Loading...."

let movieHolder = document.createElement('div')
movieHolder.className = "movie-holder"

const createMovieElement = (moveObject) => {
    let anchorTag = document.createElement('a')
    anchorTag.className="movie-link"
    anchorTag.href = "/movie"

    let divWrapper = document.createElement('div');
    divWrapper.className = "movie";
    divWrapper.setAttribute('data-id' ,moveObject.name );


    let innerDiv = document.createElement('div');
    innerDiv.className = "movie-img-wrapper";
    innerDiv.style.backgroundImage = `url(${moveObject.imgUrl})`

    let innerHeading = document.createElement('h4');
    innerHeading.innertext = moveObject.name;
    divWrapper.appendChild(innerDiv)
    divWrapper.appendChild(innerHeading)

    anchorTag.appendChild(divWrapper)

    return anchorTag
}

window.onload = async function () {
    try {
        const main = document.querySelector('main')
        main.appendChild(loader)
        main.appendChild(movieHolder)
        const data = await fetchMovieList();
        //remove that element
        loader.remove()
        data.forEach(movie => {
            movieHolder.append(createMovieElement(movie))
        })
    } catch(e) {
        console.log(e)
    }
}