import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to the Blog App")
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})