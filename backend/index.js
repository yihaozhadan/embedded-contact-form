const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001

app.post('/', (req, res) => {
    console.log(req.body);
  res.status(200).end();
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})