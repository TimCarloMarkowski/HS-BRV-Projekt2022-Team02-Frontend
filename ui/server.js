const express = require('express')
const axios = require('axios')

const app = express()

const axiosInstance = axios.create({
    baseURL: 'http://localhost:1339/products',
    header: { 'Access-Control-Allow_Origin': '*' }
})
app.get("/", async (req, res, next) => {
  try {
    const response = await axiosInstance.get("/products");
    console.log(response.data.result);

    //Or you can use json method to send the data
    res.status(200).json(response.data.result);

  } catch (err) {
    res.status(400).send(err);
  }
})

app.listen(3003, () => {
    console.log('listening on port 3003')
}) 