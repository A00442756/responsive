const express = require('express')
const router = express.Router()

const University = require('../models/university')

router.get('/', async (req, res) => {
    try {
        const universities = await University.find()
        res.json(universities)
    } catch (err) {
        res.send('Error: ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const university = await University.findById(req.params.id)
        res.json(university)
    } catch (err) {
        res.send('Error: ' + err)
    }
})

router.post('/', async (req, res) => {
    console.log('p1')
    console.log(req.body.name)
    const university = new University({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
    })

    try {
        const uni = await university.save()
        res.json(uni)
    } catch (err) {
        res.send('Error: ' + err)
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        University.findByIdAndUpdate(
            { _id: req.params.id },
            { name: req.body.name },
            { address: req.params.address },
            { phone: req.params.phone },
            function (err, result) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(result)
                }
            }
        )
    } catch (err) {
        res.send('Error: ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const university = await University.findById(req.params.id)
        university.remove()
        res.send('Successful')
    } catch (err) {
        res.send('Error: ' + err)
    }
})

module.exports = router
