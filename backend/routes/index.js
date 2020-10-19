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

router.post("/users", (req, res, next) => {
    const user_id = req.body.user_id
    const username = req.body.username
    const password = req.body.password
    const status = req.body.status
    console.log(username)
    console.log(password)
    ppl.addUser(
        user_id,
        username,
        password,
        status
    )
    res.json(
        {
            "status":201,
            "data": "some data"
        }
    )
})

router.get("/users", (req, res, next) => {
    const all_users = ppl.getUsers()
    res.json({
        "status":200,
        "data":JSON.stringify(all_users)
    })
})

module.exports = router;