const express = require('express');
const axios = require('axios');
const yelp = require('yelp-fusion');
const apiKey = 'Bearer zMhGgLW70Ydy2AzBdWa9moBjqx0rI6oe8on2X34CI8CgdSOJi9EMxaopOtmU9Ovs2-QYJSJNrBhRRB2vqELGvy5PUruzjgWumWxKmnx5AhtXQi6cQcvgOVVxK8jCW3Yx';
const categories = require('./categories.json');
const path = require('path');



axios.defaults.headers.common['Authorization'] = apiKey;

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname + '/client/build'))


app.get('/home', async (req, res) => {
  let {data} = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=restaurants&location=${req.query.location}`);
  res.json(data);
})

app.get('/home2', async (req, res) => {
  let {data} = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=active&location=${req.query.location}`);
  res.json(data);
})
app.get('/home3', async (req, res) => {
  let {data} = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=arts&location=${req.query.location}`);
  res.json(data);
})
app.get('/home4', async (req, res) => {
  let {data} = await axios.get(`https://api.yelp.com/v3/businesses/search?categories=hotelstravel.localflavor.publicart&location=${req.query.location}`);
  res.json(data);
})

app.get('/', (req, res) => {
  res.sendFile( path.join(__dirname, './client/build/index.html') );
})

app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))
