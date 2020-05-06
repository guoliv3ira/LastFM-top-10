//58d5197fc1c9f81a57eb3facc4587b84 <= api key
const inputUser = document.querySelector('.user')

const btn = document.querySelector('.pesquisa')
const list = document.querySelector('.result')
const overall = document.querySelector('#overall')
const sevenday = document.querySelector('#sevenday')
const onemonth = document.querySelector('#onemonth')
const threemonths = document.querySelector('#threemonths')
const sexmonths = document.querySelector('#sexmonths')
const year = document.querySelector('#year')
const albums = document.querySelector('#album')
const artists = document.querySelector('#artist')
const tracks = document.querySelector('#track')
const loading = document.createElement('img')
loading.setAttribute('src', "/img/loading.gif")
loading.setAttribute('class', "loading")
const lista = document.querySelector('.list')


btn.addEventListener('click', (e) => {
    const User = inputUser.value
    // if (overall.checked){
    //     search(User,"overall")
    //     list.innerHTML = ""
    //     list.appendChild(loading)
    // }
    // if (sevenday.checked){
    //     search(User,"7day")
    //     list.innerHTML = ""
    //     list.appendChild(loading)
    // }
    // if (onemonth.checked){
    //     search(User,"1month")
    //     list.innerHTML = ""
    //     list.appendChild(loading)
    // }
    // if (threemonths.checked){
    //     search(User,"3month")
    //     list.innerHTML = ""
    //     list.appendChild(loading)
    // }
    // if (sixmonths.checked){
    //     search(User,"6month")
    //     list.innerHTML = ""
    //     list.appendChild(loading)
    // }
    // if (year.checked){
    //     search(User,"12month")
    //     list.innerHTML = ""
    //     list.appendChild(loading)
    // }
    if (albums.classList.contains('active')) {

        if (overall.classList.contains('active')) {
            search(User, "gettopalbums", "overall")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (sevenday.classList.contains('active')) {
            search(User, "gettopalbums", "7day")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (onemonth.classList.contains('active')) {
            search(User, "gettopalbums", "1month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (threemonths.classList.contains('active')) {
            search(User, "gettopalbums", "3month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (sixmonths.classList.contains('active')) {
            search(User, "gettopalbums", "6month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (year.classList.contains('active')) {
            search(User, "gettopalbums", "12month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
    }

    if (artists.classList.contains('active')) {
        if (overall.classList.contains('active')) {
            search(User, "gettopartists", "overall")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (sevenday.classList.contains('active')) {
            search(User, "gettopartists", "7day")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (onemonth.classList.contains('active')) {
            search(User, "gettopartists", "1month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (threemonths.classList.contains('active')) {
            search(User, "gettopartists", "3month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (sixmonths.classList.contains('active')) {
            search(User, "gettopartists", "6month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (year.classList.contains('active')) {
            search(User, "gettopartists", "12month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
    }

    if (tracks.classList.contains('active')) {
        if (overall.classList.contains('active')) {
            search(User, "gettoptracks", "overall")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (sevenday.classList.contains('active')) {
            search(User, "gettoptracks", "7day")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (onemonth.classList.contains('active')) {
            search(User, "gettoptracks", "1month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (threemonths.classList.contains('active')) {
            search(User, "gettoptracks", "3month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (sixmonths.classList.contains('active')) {
            search(User, "gettoptracks", "6month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
        if (year.classList.contains('active')) {
            search(User, "gettoptracks", "12month")
            lista.innerHTML = ""
            list.appendChild(loading)
        }
    }


})

const search = (user, type, period) => {
    axios.get('https://ws.audioscrobbler.com/2.0/?method=user.' + type + '&user=' + user + '&api_key=58d5197fc1c9f81a57eb3facc4587b84&period=' + period + '&format=json')
        .then((response) => {
            if (type == "gettopalbums") {
                resultAlbum(response.data.topalbums.album)
            }

            if (type == "gettopartists") {
                resultArtist(response.data.topartists.artist)
                // console.log(response.data.topartists.artist)
            }

            if (type == "gettoptracks") {
                resultTrack(response.data.toptracks.track)
                // console.log(response.data.toptracks.track)
            }
        })
        .catch((error) => {
            list.innerHTML = "Erro"
        })
}

const resultAlbum = (data) => {
    lista.innerHTML = ''
    list.innerHTML = ''
    for (let i = 0; i < 10; i++) {
        const { artist: { name: artist }, name: album, image } = data[i]
        const large = image[2]
        const { "#text": size } = large

        // const nome = document.createElement('p')
        // nome.innerHTML = album
        // const artista = document.createElement('p')
        // artista.innerHTML = artist
        // artista.classList.add('artista')
        // const capa = document.createElement('img')
        // capa.setAttribute('src', size)
        // const item = document.createElement('li')
        // item.classList.add('list-group-item')
        // item.appendChild(capa)
        // item.appendChild(artista)
        // item.appendChild(nome)
        // list.appendChild(item)

        const nome = document.createElement('p')
        nome.innerHTML = album
        nome.classList.add('card-text')
        const artista = document.createElement('p')
        artista.innerHTML = artist
        artista.setAttribute('class', 'artista card-text')
        console.log(nome, lista, artista)
        const capa = document.createElement('img')
        capa.setAttribute('src', size)
        capa.setAttribute('class', "card-img-top")
        

        const card = document.createElement('div')
        card.setAttribute('class', 'col-sm-3 divcard')
        const item = document.createElement('div')
        item.setAttribute('class','card')
        item.appendChild(capa)
        const body = document.createElement('div')
        body.setAttribute('class', 'card-body')
        body.appendChild(artista)
        body.appendChild(nome)
        item.appendChild(body)
        card.appendChild(item)
        lista.appendChild(card)

        // console.log(artist, album, size)

    }
}

const resultArtist = (data) => {
    list.innerHTML = ""
    lista.innerHTML = ''
    for (let i = 0; i <= 10; i++) {
        const { name } = data[i]

        const nome = document.createElement('p')
        nome.innerHTML = name
        const li = document.createElement('li')
        li.appendChild(nome)
        li.setAttribute('class', 'list-group-item artista')
        list.appendChild(li)
    }
}

const resultTrack = (data) => {
    list.innerHTML = ""
    list.innerHTML = ''
    for (let i = 0; i <= 10; i++) {
        const { name, artist } = data[i]
        const { name: artists } = artist

        // console.log(name, artists)
        const track = document.createElement('p')
        track.innerHTML = name
        const artista = document.createElement('p')
        artista.innerHTML = artists
        track.setAttribute('class', 'artista')
        const li = document.createElement('li')
        li.appendChild(track)
        li.appendChild(artista)
        li.setAttribute('class', 'list-group-item')
        list.appendChild(li)

    }
}