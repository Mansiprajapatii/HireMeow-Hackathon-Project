const { execSync } = require('child_process');
const UserDetails = require('../models/db-schema');
const express = require('express')
const router = express.Router()
const github = require('../models/db-2')

// Get argument from command line
const arg = 'https://github.com/saransh484/Express-MongoDB.git'

// const arg = UserDetails.find('proj')
function runLate(){
// Run shell script with argument
execSync(`./test.sh ${arg}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
}

var pathArray = arg.split( '/' );

len = pathArray.length
last = pathArray[len-1]
last1 = last.split('.')
folder = last1[0]
console.log(folder)

const data = require(`./.temp/${folder}/package.json`)

var distance = data.dependencies;

let x = Object.keys(distance)

router.patch('/:link', async (req,res)=>{
    try {
        const git = await github.findOne(req.params.link)
        git.proj = req.body.proj
        git.save()
    } catch (err) {
        res.send(err)
    }
})

console.log(x)

// module.exports = {Skill : x } 