const express = require('express')
const app = express()
const PORT = 8000

const music = {
    'rock': {
        'albumName': 'Migrant',
        'artistName': 'The Dear Hunter',
        'yearReleased': 2013
    },
    'rap': {
        'albumName': 'No Thank You',
        'artistName': 'Little Simz',
        'yearReleased': 2022
    },
    'blues': {
        'albumName': 'Deuces Wild',
        'artistName': 'B.B. King',
        'yearReleased': 1997
    },
    'jazz': {
        'albumName': 'Earth',
        'artistName': 'Sault',
        'yearReleased': 2022
    },
    'soul': {
        'albumName': 'Purple',
        'artistName': 'Danny Kuttner',
        'yearReleased': 2023
    },
    'pop': {
        'albumName': 'Born Pink',
        'artistName': 'Blackpink',
        'yearReleased': 2022
    },
    'unknown': {
        'albumName': 'unknown',
        'artistName': 'unknown',
        'yearReleased': 'unknown'
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:genre', (req,res)=>{
    const genreName = req.params.genre.toLowerCase()

    if ( music[genreName] ){
        res.json(music[genreName])
    }else{
        res.json(music['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}, ya dig?`)
})