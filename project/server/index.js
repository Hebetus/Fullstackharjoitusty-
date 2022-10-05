const express = require('express')
const cors = require('cors')

const data = require('./data')

let posts = [
    {
        author: "Emil Hellberg",
        content: "Märy on tosi kiva paikka",
        id: 0
      },
      {
        author: "Default",
        content: "neekerit vittuu märyst",
        id: 1
      },
      {
        author: "Default",
        content: "Kalja tekee kyl hyvää pitkä työpäivä jälkee",
        id: 2
      },
      {
        author: "Default",
        content: "Jou man 420",
        id: 3
      },
      {
        author: "Default",
        content: "Uusi postaus?",
        id: 4
      },
      {
        author: "Default",
        content: "joooo",
        id: 5
      },
      {
        author: "Default",
        content: "jou jou",
        id: 6
      },
      {
        author: "Default",
        content: "Uusi postaus?",
        id: 7
      },
      {
        author: "Default",
        content: "khyyl :)",
        id: 8
      },
      {
        author: "Default",
        content: "aszasefasef<zxf",
        id: 9
      },
      {
        author: "Default",
        content: "Uusi postaus?",
        id: 10
      },
      {
        author: "Default",
        content: "sdgsdgsd",
        id: 11
      },
      {
        author: "Default",
        content: "huumeita :D",
        id: 12
      },
      {
        author: "Default",
        content: "jep",
        id: 13
      },
      {
        author: "Default",
        content: "Ensimmäinen uusi testi",
        id: 14
      },
      {
        author: "Default",
        content: "Pitänee lisätä seuraavaks käyttäjätoiminto :D",
        id: 15
      },
      {
        author: "Default",
        content: "sdfsdf\nasdfasdfasafg\nasfasfasf",
        id: 16
      },
      {
        author: "Default",
        content: "Ideana on siis et täst lähtee tää ekosysteemi käyntiin",
        id: 17
      },
      {
        author: "Default",
        content: "Voin ainaki jutella tääl itekseni tosistaseks :D",
        id: 18
      }
]

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.get('/api/posts/', (request, response) => {
    response.json(posts)
})

app.post('/api/posts/', (request, response) => {
    console.log(request.body)
    const newPost = request.body
    newPost.id = posts.length
    posts = posts.concat(newPost)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Selain käynnissä portissa 3001')
})