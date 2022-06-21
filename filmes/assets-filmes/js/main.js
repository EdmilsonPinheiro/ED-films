const app = document.getElementById('filmes')

const container = document.createElement('div')

container.setAttribute('class', 'container')

app.appendChild(container)

fetch(
  'https://api.themoviedb.org/3/movie/popular?api_key=ecc3f93f8f9231e108ff8611d768ec6c&language=pt-BR&page=22'
)
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.results.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const image = document.createElement('img')
      image.src = 'https://image.tmdb.org/t/p/w400' + movie.poster_path

      const p = document.createElement('p')
      movie.overview = movie.overview
      p.textContent = 'Descrição: ' + movie.overview

      const data = document.createElement('span')
      data.textContent = 'Data: ' + movie.release_date

      const average = document.createElement('span')
      average.textContent = 'Avaliação: ' + movie.vote_average

      const id = movie.id
      let titleFormat = movie.title.toLowerCase().split(' ')

      let link =
        'https://www.themoviedb.org/movie/' +
        id +
        '-' +
        titleFormat +
        '?language=pt-BR'

      const linksImage = document.createElement('a')
      linksImage.setAttribute('href', link)

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(data)
      card.appendChild(average)
      card.appendChild(linksImage)
      linksImage.appendChild(image)
      card.appendChild(p)
    })
  })
  .catch(err => {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Aah, não está funcionando!'
    app.appendChild(errorMessage)
  })