import express from 'express';
import userModel from './models';
import postModel from './posts';
import cors from 'cors';

const PORT = process.env.PORT || 3500
console.log('API Port: ' + PORT)
const app = express()

app.use(cors());

app.get('/', (req, res) => {
  res.send({ hello: 'there!' })
})

app.get('/users', (req, res) => {
  userModel.list()
    .then((users) => {      
      res.status(200).send(users)
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).send({message: error.message})
    })
  
})

app.get('/posts', (req, res) => {
  postModel.list()
    .then((posts) => {
      res.status(200).send(posts)
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).send({message: error.message})
    })
})

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
)