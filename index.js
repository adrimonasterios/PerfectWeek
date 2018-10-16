const express = require('express');
const axios = require('axios');
const yelp = require('yelp-fusion');
const apiKey = 'Bearer zMhGgLW70Ydy2AzBdWa9moBjqx0rI6oe8on2X34CI8CgdSOJi9EMxaopOtmU9Ovs2-QYJSJNrBhRRB2vqELGvy5PUruzjgWumWxKmnx5AhtXQi6cQcvgOVVxK8jCW3Yx';
const categories = require('./categories.json');



axios.defaults.headers.common['Authorization'] = apiKey;

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname + '/client/build'))


app.get('/home', async (req, res) => {
  console.log(req.params)
  let {data} = await axios.get(`https://api.yelp.com/v3/businesses/search?location=`);
  res.json(data);
})


app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))
