const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Bem vindo a Marcenaria!')
})

app.get('/cadeiras', (req, res) => {
  res.send('cadeira 4 pernas!')
})

app.listen(port, () => {
  console.log(`Iniciando na porta:${port}`)
})