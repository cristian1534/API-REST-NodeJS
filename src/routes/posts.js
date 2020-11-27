const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');


router.get('/', async (req, res)=>{
     const response = await fetch('http://jsonplaceholder.typicode.com/posts');
     const posts = await response.json();

    res.json(posts);


});


module.exports = router