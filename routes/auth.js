const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const Account = require('../models/account')

const secret = "mynameiscasso"
const expiresIn = 60*60*5

function createIdToken(user) {
    return jwt.sign(_.omit(user, 'password'), secret, {expiresIn: expiresIn})
}

function createAccessToken() {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        scope: 'full_access',
        sub: "lalaland|gonto",
        jti: generateUniqueIdentiferForAccessToken(),
        alg: 'HS256'
    }, secret)
  }
  
function generateUniqueIdentiferForAccessToken() {
    let jti = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 16; i++) {
        jti += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    
    return jti
}

router.post('/users', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    Account.create(req.body, (err, user) => {
        if (err) {
            return res.status(401).send(err)
        }

        return res.status(201).send({
            id_token: createIdToken(user),
            access_token: createAccessToken(),
        })
    })
})

router.get('/users/:id', (req, res) => {
    Account.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(401).send(err)
        }

        res.status(200).send(user)
    })
})

router.put('/users/:id', (req, res) => {
    Account.findByIdAndUpdate(req.params.id, req.params, (err, user) => {
        if (err) {
            return res.status(401).send(err)
        }
        
        res.status(204).send(user)
    })
})

router.delete('/users/:id', (req, res) => {
    Account.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            return res.status(401).send(err)
        }

        res.status(202)
    })
})

router.post('/sessions/create', (req, res) => {
    Account.find({username: req.body.username}, (err, users) => {
        if (err) {
            return res.status(401).send(err)
        }

        if (!users.length) {
            return res.status(401).send("User does not exist.")
        }

        let user = users[0]

        let isPasswordCorrect = bcrypt.compareSync(
            req.body.password, 
            user.password,
        )

        if(!isPasswordCorrect) {
            return res.status(401).send("Password incorrect.")
        }

        return res.status(201).send({
            id_token: createIdToken(user),
            access_token: createAccessToken(),
        })
    })
})

module.exports = router