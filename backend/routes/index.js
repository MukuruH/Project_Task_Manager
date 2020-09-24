const { request } = require('express');
const express = require('express');
const router = express.Router();
const ppl = require("../controllers/index")

router.get("/",(req, res, next)=>{
    res.json("hallo world")
})

router.get("/name",(req, res, next)=>{
    res.json(
        ppl.addit()
    )
})

router.post("/adding",(req, res, next)=>{
    res.json(
        ppl.anoda1(req.body.a, req.body.b)
    )
})

module.exports = router;