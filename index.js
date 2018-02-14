const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/viva', (req, res) => res.render('pages/viva'))
  .get('/blog', (req, res) => res.render('pages/blog'))
  .get('/bridge', (req, res) => res.render('pages/bridge'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/seattle-bike-race', (req, res) => res.render('pages/seattle-bike-race'))
  .get('/blog-capturing-big-sur', (req, res) => res.render('pages/blog-capturing-big-sur'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
