const express = require('express')
const { emit } = require('../models/db-schema')
const UserDetails = require('../models/db-schema')
const runLate = require('../Shell_Script/shell')

const router = express.Router()

router.get('/', async (req, res)=>{
    try{
        const User = await UserDetails.find()
        res.json(User)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/', async (req,res)=>{
    try {
        const User = await UserDetails.findById(req.params.id)
        res.json(User)
    } catch (err) {
        console.log("Err" + err);
        res.send(err)
    }
})

router.patch('/:UsrName', async (req,res)=>{
    try {
        const User = await UserDetails.findOne(req.params.UsrName)
        User.stu = req.body.stu
        const Us1 = await User.save()
        res.json(Us1)
    } catch (err) {
        console.log(('ERR'+ err))
        res.send(err)
    }
})

router.delete('/:UsrName', async (req, res)=>{
    const User = await UserDetails.findOne(req.params.UsrName)
    const e1 = await User.deleteOne()
    res.json(e1)
})

router.post('/', async (req,res)=>{
    console.log(req.body)
     const User = new UserDetails({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        school:req.body.school,
        tenPer:req.body.tenPer,
        twelPer:req.body.twelPer,
        board:req.body.board,
        cgpa:req.body.cgpa,
        clgName:req.body.clgName,
        gradYear:req.body.gradYear
     })

     try{
        const Us1 = await User.save()
        res.json(Us1)
     }catch(err){
        res.send('Err' + err)
     }
})

module.exports = router