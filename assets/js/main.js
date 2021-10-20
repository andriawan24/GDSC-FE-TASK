let data = []

const buildList = (data) => {
    let html = ''

    data.forEach((movie, _) => {
        html += `
        <li class="item">
            <img src="${movie.posterurl}" alt="Dummy">
            <h1 class="title">${movie.title}</h1>
            <p class="genres">Drama, History, Legend</p>
        </li>
        `
    })

    return html
}

fetch('assets/source/movies.json')
    .then(response => response.json())
    .then(json => {
        data = json
        const root = document.querySelector('.movie-list')
        console.log(root)
        root.innerHTML = buildList(data)
    })
    .catch(err => console.error(err))