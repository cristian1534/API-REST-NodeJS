const path = require('path')

const { Router } = require('express'); // me permite crear rutas
const router = Router();


//routes
router.get('/', (req, res)=>{
    
    res.sendFile(path.resolve(__dirname,'index.html'))
});

module.exports = router;