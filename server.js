const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Listening on port ${port}`));

 app.get('/get_prices', (req, res) => {
    fetch('https://api.porssisahko.net/v1/latest-prices.json')
    .then(response => response.json())
    .then(data => res.json(data))})

    app.get('/', (req,res) =>{
      res.send({express: 'test'})
    });

