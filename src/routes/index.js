const { Router } = require('express');
const router = Router();

router.get('/test',(req,res)=>{
    const data = {
        "name" : "hector",
        "company" : "Arcak"
    }
    res.json(data);
});

module.exports = router;